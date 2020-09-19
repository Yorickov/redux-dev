import { createReducer, combineReducers } from '@reduxjs/toolkit';
import _ from 'lodash';
import {
  updateNewTaskText,
  addTask,
  removeTask,
  toggleTaskState,
} from '../actions';

const text = createReducer('', {
  [updateNewTaskText]: (state, { payload }) => payload.text,
  [addTask]: () => '',
});

const tasks = createReducer({ byId: {}, allIds: [] }, {
  [addTask]: (state, { payload: { task } }) => {
    const { byId, allIds } = state;
    return {
      byId: { ...byId, [task.id]: task },
      allIds: [task.id, ...allIds],
    };
  },
  [removeTask]: (state, { payload: { id } }) => {
    const { byId, allIds } = state;
    return {
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
});

export default combineReducers({
  text,
  tasks,
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
