import { createReducer, combineReducers } from '@reduxjs/toolkit';
import _ from 'lodash';
import { reducer as formReducer } from 'redux-form';
import {
  updateNewTaskText,
  addTask,
  removeTask,
  toggleTaskState,
  setTasksFilter,
} from '../actions';

const text = createReducer('', {
  [updateNewTaskText]: (state, { payload }) => payload.text,
  [addTask]: () => '',
});

const tasks = createReducer({ byId: {}, allIds: [], currentFilterName: 'all' }, {
  [addTask]: (state, { payload: { task } }) => {
    const { byId, allIds } = state;
    return {
      ...state,
      byId: { ...byId, [task.id]: task },
      allIds: [task.id, ...allIds],
    };
  },
  [removeTask]: (state, { payload: { id } }) => {
    const { byId, allIds } = state;
    return {
      ...state,
      byId: _.omit(byId, id),
      allIds: _.without(allIds, id),
    };
  },
  [toggleTaskState]: (state, { payload: { id } }) => {
    const task = state.byId[id];

    const newState = task.state === 'active' ? 'finished' : 'active';
    const updatedTask = { ...task, state: newState };
    return {
      ...state,
      byId: { ...state.byId, [task.id]: updatedTask },
    };
  },
  [setTasksFilter]: (state, { payload: { filterName } }) => (
    { ...state, currentFilterName: filterName }),
});

export default combineReducers({
  text,
  tasks,
  form: formReducer,
});

// const text = createReducer('', {
//   TEXT_UPDATE: (state, { payload }) => payload.text,
//   TASK_ADD: () => '',
// });

// const tasks = createReducer([], {
//   TASK_ADD: (state, { payload }) => ([payload.task, ...state]),
//   TASK_REMOVE: (state, { payload }) => state.filter(((task) => task.id !== payload.id)),
// });

// export default combineReducers({
//   text,
//   tasks,
// });
