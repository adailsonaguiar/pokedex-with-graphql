import * as ActionTypes from './actionTypes';

export const addPokemon = (text) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.ADD_POKEMON, payload: text });
  };
};
