import * as ActionTypes from './actionTypes';
import { GraphQLClient } from 'graphql-request';
import { endpoint } from '../../appsettings';

export function listPokemons() {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionTypes.LOAD_POKEMONS_LIST });
      const query = `{
      pokemons(first: 100) {
        id
        name
        image
        types
      }
    }`;
      const graphQLClient = new GraphQLClient(endpoint);
      const data = await graphQLClient.request(query);
      if (data)
        dispatch({ type: ActionTypes.LIST_POKEMONS, payload: data.pokemons });
    } catch (e) {
      console.log(e);
    }
  };
}

export function searchPokemon(name) {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.LOAD_POKEMONS_LIST });
    let query = '';
    if (name) {
      query = `{
      pokemon(name: "${name}") {
        id
        name
        image
        types
      }
    }
    `;

      const graphQLClient = new GraphQLClient(endpoint);
      const data = await graphQLClient.request(query);
      const response = data.pokemon ? [data.pokemon] : [];
      dispatch({
        type: ActionTypes.LIST_POKEMONS,
        payload: response,
      });
    } else dispatch(listPokemons());
  };
}

export function getPokemonDetails(name) {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.LOAD_POKEMONS_LIST });
    const query = `{
      pokemon(name: "${name}") {
        id
        name
        image
        types
        evolutions {
          id
          image
          name
        }
        attacks {
          fast {
            name
            damage
          }
          special {
            name
            damage
          }
        }
      }
  }`;

    const graphQLClient = new GraphQLClient(endpoint);
    const data = await graphQLClient.request(query);
    dispatch({ type: ActionTypes.LOAD_POKEMON_DETAILS, payload: data.pokemon });
  };
}
