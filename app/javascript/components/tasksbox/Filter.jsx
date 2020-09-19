import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const filters = [['all', 'All Tasks'], ['active', 'Active Tasks'], ['finished', 'Finished Tasks']];

const mapStateToProps = (state) => {
  const { tasks: { currentFilterName } } = state;
  return { currentFilterName };
};

const actionCreators = {
  setTasksFilter: actions.setTasksFilter,
};

const Filter = (props) => {
  const handleSetTasksFilter = (filterName) => () => {
    const { setTasksFilter } = props;
    setTasksFilter(filterName);
  };

  const renderFilter = ([state, name]) => {
    const { currentFilterName } = props;
    if (currentFilterName === state) {
      return name;
    }

    return (
      <button
        type="button"
        key={state}
        className="btn btn-link border-0 p-0"
        data-test={`task-filter-${state}`}
        onClick={handleSetTasksFilter(state)} // !!!!!
      >
        {name}
      </button>
    );
  };

  return (
    <div className="mt-3 d-flex justify-content-around">
      {filters.map(renderFilter)}
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(Filter);
