import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from '../../app/javascript/reducers';
import TasksBox from '../../app/javascript/components/tasksbox/TasksBox';

it('Store', () => {
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

  newTaskSubmit.simulate('submit');
  expect(wrapper.render()).toMatchSnapshot();

  newTaskInput.simulate('change', { target: { value: 'another task' } });
  expect(wrapper.render()).toMatchSnapshot();

  newTaskSubmit.simulate('submit');
  expect(wrapper.render()).toMatchSnapshot();

  const links = wrapper.find('.close');
  links.last().simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
});
