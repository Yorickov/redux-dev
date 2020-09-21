import { createAction } from '@reduxjs/toolkit';

export const addTask = createAction(
  'TASK_ADD',
  (task) => ({ payload: { task } }),
);

export const removeTask = createAction(
  'TASK_REMOVE',
  (id) => ({ payload: { id } }),
);

export const toggleTaskState = createAction(
  'TASK_STATE_TOGGLE',
  (id) => ({ payload: { id } }),
);

export const setTasksFilter = createAction(
  'TASK_FILTER_SET',
  (filterName) => ({ payload: { filterName } }),
);
