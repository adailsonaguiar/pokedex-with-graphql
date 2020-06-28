import * as ActionTypes from './actionTypes';

const INITIAL_STATE = { text: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_POKEMON:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};
