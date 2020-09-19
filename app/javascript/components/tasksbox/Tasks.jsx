import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapStateToProps = ({ tasks, text }) => {
  const props = { tasks };
  return props;
};

const actionCreators = {
  removeTask: actions.removeTask,
};

const Tasks = (props) => {
  const handleRemoveTask = (id) => () => {
    const { removeTask } = props;
    removeTask(id);
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
    <div className="mt-3">
      {renderTasks(tasks, text)}
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(Tasks);
