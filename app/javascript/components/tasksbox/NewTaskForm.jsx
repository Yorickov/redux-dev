import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import * as actions from '../../actions';

const mapStateToProps = () => ({});

const actionCreators = {
  addTask: actions.addTask,
};

const NewTaskForm = (props) => {
  const handleAddTask = async (values) => {
    const { addTask, reset } = props;
    const task = { ...values, state: 'active' };
    try {
      await addTask(task);
    } catch (e) {
      throw new SubmissionError({ _error: e.message });
    }
    reset();
  };

  const { handleSubmit, submitting, pristine, error } = props;

  return (
    <form action="" className="form-inline" onSubmit={handleSubmit(handleAddTask)}>
      <div className="form-group mx-sm-3">
        <Field name="text" required component="input" type="text" disabled={submitting} />
      </div>
      <button type="submit" disabled={pristine || submitting} className="btn btn-primary btn-sm">Add</button>
      {error && <div className="ml-3">{error}</div>}
    </form>
  );
};

const ConnectedNewTaskForm = connect(mapStateToProps, actionCreators)(NewTaskForm);

export default reduxForm({ form: 'newTask' })(ConnectedNewTaskForm);
