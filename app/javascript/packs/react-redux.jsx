import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from '../reducers';
import { fetchTasks } from '../actions';
import TasksBox from '../components/tasksbox/TasksBox';

const store = configureStore({
  reducer: reducers,
});

store.dispatch(fetchTasks());

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <TasksBox />
    </Provider>,
    document.getElementById('react-redux'),
  );
});
