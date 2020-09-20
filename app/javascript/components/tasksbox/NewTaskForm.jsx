import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

const mapStateToProps = () => ({});

const actionCreators = {
  addTask: actions.addTask,
};

const NewTaskForm = (props) => {
  const handleAddTask = (values) => {
    const { addTask, reset } = props;
    const task = { ...values, id: nanoid(), state: 'active' };
    addTask(task);
    reset();
  };

  const { handleSubmit } = props;

  return (
    <form action="" className="form-inline" onSubmit={handleSubmit(handleAddTask)}>
      <div className="form-group mx-sm-3">
        <Field name="text" required component="input" type="text" />
      </div>
      <button type="submit" className="btn btn-primary btn-sm">Add</button>
    </form>
  );
};

const ConnectedNewTaskForm = connect(mapStateToProps, actionCreators)(NewTaskForm);

export default reduxForm({ form: 'newTask' })(ConnectedNewTaskForm);
