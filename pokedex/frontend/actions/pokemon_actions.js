// ??? import * as APIUtil ???
import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_A_POKEMON = "RECEIVE_A_POKEMON";

export const receiveAllPokemon = pokemon => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

// ??? how does the dispatch mechanic work? automatically dispatches action with ajax result?

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const receiveAPokemon = pokemon => {
  return {
    type: RECEIVE_A_POKEMON,
    pokemon
  };
};

export const requestAPokemon = (id) => (dispatch) => (
  APIUtil.fetchAPokemon(id)
    .then(pokemon => dispatch(receiveAPokemon(pokemon)))
);

