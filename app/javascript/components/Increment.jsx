import React from 'react';

const Increment = (props) => {
  const handleClick = () => {
    const { dispatch, increment } = props;
    dispatch(increment());
  };

  const { count } = props;
  return (
    <div className="col-6">
      <button className="btn btn-primary" onClick={handleClick}>Increment: {count}</button>
    </div>
  );
};

export default Increment;
