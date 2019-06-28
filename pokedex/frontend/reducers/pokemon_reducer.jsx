import { RECEIVE_ALL_POKEMON, RECEIVE_A_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

//??? why cant use default with 'const'
export const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let poke;

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon );
    case RECEIVE_A_POKEMON:
      debugger
      poke = action.poke.pokemon;
      return merge({}, state, {[poke.id]: poke} );
    default:
      return state;
  }
};