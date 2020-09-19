import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { updateNewTaskText, addTask, removeTask } from '../../actions';

// state => state
const mapStateToProps = ({ tasks, text }) => {
  const props = { tasks, text };
  return props;
};

const TasksBox = (props) => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const { dispatch, text } = props;
    const task = { text, id: _.uniqueId() };
    dispatch(addTask(task));
  };

  const handleRemoveTask = (id) => () => {
    const { dispatch } = props;
    dispatch(removeTask(id));
  };

  const handleUpdateNewTaskText = (e) => {
    const { dispatch } = props;
    dispatch(updateNewTaskText(e.target.value));
  };

  const renderTasks = (tasks) => {
    if (tasks.length === 0) {
      return null;
    }
    return (
      <div className="mt-3">
        <ul className="list-group">
          {tasks.map(({ id, text }) => (
            <li key={id} className="list-group-item d-flex">
              <span className="mr-auto">{text}</span>
              <button type="button" className="close" onClick={handleRemoveTask(id)}>
                <span>&times;</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const { tasks, text } = props;
  return (
    <div className="col-5">
      <form action="" className="form-inline" onSubmit={handleAddTask}>
        <div className="form-group mx-sm-3">
          <input type="text" required value={text} onChange={handleUpdateNewTaskText} />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">Add</button>
      </form>
      {renderTasks(tasks)}
    </div>
  );
};

export default connect(mapStateToProps)(TasksBox);
