import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import reducers from '../reducers/raw';
import * as actionCreators from '../actions/raw';
import Increment from '../components/Increment';
import TextForm from '../components/TextForm';

const store = configureStore({
  reducer: reducers,
});

store.subscribe(() => {
  const { counter, text } = store.getState();
  ReactDOM.render(
    <div className="row">
      <Increment dispatch={store.dispatch} count={counter} {...actionCreators} />
      <TextForm dispatch={store.dispatch} text={text} {...actionCreators} />
    </div>,
    document.getElementById('raw-redux'),
  );
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div className="row">
      <Increment dispatch={store.dispatch} {...actionCreators} />
      <TextForm dispatch={store.dispatch} {...actionCreators} />
    </div>,
    document.getElementById('raw-redux'),
  );
});
