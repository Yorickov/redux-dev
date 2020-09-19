import React from 'react';
import { connect } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import * as actions from '../../actions';

const mapStateToProps = (state) => ({ text: state.text });

const actionCreators = {
  updateNewTaskText: actions.updateNewTaskText,
  addTask: actions.addTask,
};

const NewTaskForm = (props) => {
  const handleUpdateNewTaskText = (e) => {
    const { updateNewTaskText } = props;
    updateNewTaskText(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const { addTask, text } = props;
    const task = { id: nanoid(), text, state: 'active' };
    addTask(task);
  };

  const { text } = props;

  return (
    <form action="" className="form-inline" onSubmit={handleAddTask}>
      <div className="form-group mx-sm-3">
        <input
          type="text"
          required
          value={text}
          onChange={handleUpdateNewTaskText}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-sm">Add</button>
    </form>
  );
};

export default connect(mapStateToProps, actionCreators)(NewTaskForm);
