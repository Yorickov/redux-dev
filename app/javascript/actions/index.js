import { createAction } from '@reduxjs/toolkit';

export const updateNewTaskText = createAction(
  'TEXT_UPDATE',
  (text) => ({ payload: { text } }),
);

export const addTask = createAction(
  'TASK_ADD',
  (task) => ({ payload: { task } }),
);

export const removeTask = createAction(
  'TASK_REMOVE',
  (id) => ({ payload: { id } }),
);
