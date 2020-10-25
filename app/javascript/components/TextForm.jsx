import React from 'react';

const TextForm = (props) => {
  const handleChange = (e) => {
    const { dispatch, updateText } = props;
    dispatch(updateText(e.target.value));
  };

  const handleReset = (e) => {
    e.preventDefault();
    const { dispatch, resetText } = props;
    dispatch(resetText());
  };

  const { text } = props;

  return (
    <div className="col-6">
      <form>
        <input type="text" value={text} onChange={handleChange} />
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
      {text && <div>{text}</div>}
    </div>
  );
};

TextForm.defaultProps = {
  text: '',
};

export default TextForm;
