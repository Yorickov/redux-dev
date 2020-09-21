import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { filteredTasksSelector } from '../../selectors';

const mapStateToProps = (state) => {
  const { tasksFetchingState } = state;
  const tasks = filteredTasksSelector(state);
  return { tasks, tasksFetchingState };
};

// const mapStateToProps = (state) => {
//   const { tasksFetchingState, tasks: { byId, allIds } } = state;
//   const tasks = allIds.map((id) => byId[id]);
//   return { tasks, tasksFetchingState };
// };

const actionCreators = {
  removeTask: actions.removeTask,
  toggleTaskState: actions.toggleTaskState,
};

const Tasks = (props) => {
  const handleToggleTaskState = (id) => (e) => {
    e.preventDefault();
    const { toggleTaskState } = props;
    toggleTaskState(id);
  };

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
          {tasks.map(({ id, text, state }) => (
            <li key={id} className="list-group-item d-flex">
              <span className="mr-auto">
                <a href="#" data-test="task-toggle-state" onClick={handleToggleTaskState(id)}>
                  {state === 'active' ? text : <s>{text}</s>}
                </a>
              </span>
              <button type="button" className="close" onClick={handleRemoveTask(id)}>
                <span>&times;</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const { tasks, tasksFetchingState } = props;

  if (tasksFetchingState === 'requested') {
    return (
      <div className="spinner-border m-3" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  if (tasksFetchingState === 'failed') {
    return (
      <span>Please, reload page!</span>
    );
  }

  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="mt-3">
      {renderTasks(tasks, tasksFetchingState)}
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(Tasks);
