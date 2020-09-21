import nock from 'nock';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import timeout from 'timeout-then';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from '../../app/javascript/reducers';
import TasksBox from '../../app/javascript/components/tasksbox/TasksBox';

Enzyme.configure({ adapter: new Adapter() });
axios.defaults.adapter = httpAdapter;
nock.disableNetConnect();

const host = 'http://localhost';

it('Store', async () => {
  const store = configureStore({
    reducer: reducers,
  });

  const vdom = (
    <Provider store={store}>
      <TasksBox />
    </Provider>
  );
  const wrapper = mount(vdom);
  expect(wrapper.render()).toMatchSnapshot();

  const newTaskInput = wrapper.find('input[type="text"]');
  const newTaskSubmit = wrapper.find('button[type="submit"]');

  newTaskInput.simulate('change', { target: { value: 'first task' } });
  expect(wrapper.render()).toMatchSnapshot();

  nock(host)
    .post('/tasks', {
      text: 'first task',
      state: 'active',
    })
    .reply(201, { id: 1, state: 'active', text: 'first task' });

  newTaskSubmit.simulate('submit');
  await timeout(100);
  expect(wrapper.render()).toMatchSnapshot();

  newTaskInput.simulate('change', { target: { value: 'another task' } });
  expect(wrapper.render()).toMatchSnapshot();

  nock(host)
    .post('/tasks', {
      text: 'another task',
      state: 'active',
    })
    .reply(201, { id: 2, state: 'active', text: 'another task' });

  newTaskSubmit.simulate('submit');
  await timeout(100);
  expect(wrapper.render()).toMatchSnapshot();

  const link = wrapper.find('[data-test="task-toggle-state"]').first();
  link.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  const activeFilterButton = wrapper.find('[data-test="task-filter-active"]');
  const finishedFilterButton = wrapper.find('[data-test="task-filter-finished"]');

  activeFilterButton.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  finishedFilterButton.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  const allFilterButton = wrapper.find('[data-test="task-filter-all"]');

  allFilterButton.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  const button = wrapper.find('.close');
  nock(host)
    .delete('/tasks/1')
    .reply(204);

  button.last().simulate('click');
  await timeout(100);
  expect(wrapper.render()).toMatchSnapshot();
});
