import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';

export const toggleTaskState = createAction('TASK_STATE_TOGGLE',
  (id) => ({ payload: { id } }));

export const setTasksFilter = createAction('TASK_FILTER_SET',
  (filterName) => ({ payload: { filterName } }));

export const fetchTasksRequest = createAction('TASKS_FETCH_REQUEST');
export const fetchTasksFailure = createAction('TASKS_FETCH_FAILURE');
export const fetchTasksSuccess = createAction('TASKS_FETCH_SUCCESS',
  (tasks) => ({ payload: { tasks } }));

export const removeTaskRequest = createAction('TASK_REMOVE_REQUEST');
export const removeTaskFailure = createAction('TASK_REMOVE_FAILURE');
export const removeTaskSuccess = createAction('TASK_REMOVE_SUCCESS',
  (id) => ({ payload: { id } }));

export const addTaskRequest = createAction('TASK_ADD_REQUEST');
export const addTaskFailure = createAction('TASK_ADD_FAILURE');
export const addTaskSuccess = createAction('TASK_ADD_SUCCESS',
  (task) => ({ payload: { task } }));

export const fetchTasks = () => async (dispatch) => {
  dispatch(fetchTasksRequest());
  try {
    const url = routes.tasksUrl();
    const response = await axios.get(url);
    dispatch(fetchTasksSuccess(response.data));
  } catch (e) {
    dispatch(fetchTasksFailure());
    throw e;
  }
};

export const addTask = (task) => async (dispatch) => {
  dispatch(addTaskRequest());
  try {
    const url = routes.tasksUrl();
    const response = await axios.post(url, task);
    dispatch(addTaskSuccess(response.data));
  } catch (e) {
    dispatch(fetchTasksFailure());
    throw e;
  }
};

export const removeTask = (id) => async (dispatch) => {
  dispatch(removeTaskRequest());
  try {
    const url = routes.taskUrl(id);
    await axios.delete(url);
    dispatch(removeTaskSuccess(id));
  } catch (e) {
    dispatch(removeTaskFailure());
    throw e;
  }
};
