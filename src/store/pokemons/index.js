import * as ActionTypes from './actionTypes';

const INITIAL_STATE = { list: [], loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LIST_POKEMONS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case ActionTypes.LOAD_POKEMONS_LIST:
      return { ...state, loading: true };
    default:
      return state;
  }
};
