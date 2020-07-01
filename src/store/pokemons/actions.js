import * as ActionTypes from './actionTypes';
import { GraphQLClient } from 'graphql-request';
import { endpoint } from '../../appsettings';

export function listPokemons() {
  return async (dispatch) => {
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

    dispatch({ type: ActionTypes.LIST_POKEMONS, payload: data.pokemons });
  };
}
