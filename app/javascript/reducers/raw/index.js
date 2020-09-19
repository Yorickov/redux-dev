import { createReducer, combineReducers } from '@reduxjs/toolkit';

const counter = createReducer(0, {
  INCREMENT: (state) => state + 1,
});

const text = createReducer('', {
  TEXT_UPDATE: (state, action) => action.payload.text,
  TEXT_RESET: () => '',
});

export default combineReducers({
  counter,
  text,
});
