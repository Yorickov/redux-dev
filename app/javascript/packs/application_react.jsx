import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducers from '../redux/reducers';
import * as actionCreators from '../redux/actions';
import Increment from '../components/Increment';
import TextForm from '../components/TextForm';

/* eslint-disable no-underscore-dangle */
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */

const store = createStore(reducers, reduxDevtools);

store.subscribe(() => {
  const { increment, text } = store.getState();
  ReactDOM.render(
    <div className="row">
      <Increment dispatch={store.dispatch} count={increment} {...actionCreators} />
      <TextForm dispatch={store.dispatch} text={text} {...actionCreators} />
    </div>,
    document.getElementById('react-div'),
  );
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div className="row">
      <Increment dispatch={store.dispatch} {...actionCreators} />
      <TextForm dispatch={store.dispatch} {...actionCreators} />
    </div>,
    document.getElementById('react-div'),
  );
});
