import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../actions';

// state => state
const mapStateToProps = ({ tasks, text }) => {
  const props = { tasks, text };
  return props;
};

const actionCreators = {
  ...actions,
};

const TasksBox = (props) => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const { addTask, text } = props;
    const task = { text, id: _.uniqueId() };
    addTask(task);
  };

  const handleRemoveTask = (id) => () => {
    const { removeTask } = props;
    removeTask(id);
  };

  const handleUpdateNewTaskText = (e) => {
    const { updateNewTaskText } = props;
    updateNewTaskText(e.target.value);
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

export default connect(mapStateToProps, actionCreators)(TasksBox);
