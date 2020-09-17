import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from '../redux/reducers';
import increment from '../redux/actions';
import Increment from '../components/Increment';

/* eslint-disable no-underscore-dangle */
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */

const store = createStore(reducer, reduxDevtools);

const render = (count) => (
  ReactDOM.render(
    <Increment dispatch={store.dispatch} count={count} increment={increment} />,
    document.getElementById('react-div'),
  ));

store.subscribe(() => {
  const state = store.getState();
  render(state);
});

document.addEventListener('DOMContentLoaded', () => {
  render();
});
