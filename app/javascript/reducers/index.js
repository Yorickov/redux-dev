import { createReducer, combineReducers } from '@reduxjs/toolkit';

const text = createReducer('', {
  TEXT_UPDATE: (state, { payload }) => payload.text,
  TASK_ADD: () => '',
});

const tasks = createReducer([], {
  TASK_ADD: (state, { payload }) => ([payload.task, ...state]),
  TASK_REMOVE: (state, { payload }) => state.filter(((task) => task.id !== payload.id)),
});

export default combineReducers({
  text,
  tasks,
});
