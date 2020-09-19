import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from '../reducers';
import TasksBox from '../components/tasksbox/TasksBox';

const store = configureStore({
  reducer: reducers,
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <TasksBox />
    </Provider>,
    document.getElementById('react-redux'),
  );
});
