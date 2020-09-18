import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '../components/Hello';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div className="row">
      <Hello />
    </div>,
    document.getElementById('react-redux'),
  );
});
