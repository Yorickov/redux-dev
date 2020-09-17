import { combineReducers } from 'redux';

const increment = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

const text = (state = '', action) => {
  switch (action.type) {
    case 'TEXT_UPDATE': {
      return action.payload.text;
    }
    case 'TEXT_RESET': {
      return '';
    }
    default:
      return state;
  }
};

export default combineReducers({
  increment,
  text,
});
