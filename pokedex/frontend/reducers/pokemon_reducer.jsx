import { RECEIVE_ALL_POKEMON, RECEIVE_A_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

//??? why cant use default with 'const'
export const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      const nextState = merge({}, action.pokemon );
      return nextState;
    case RECEIVE_A_POKEMON:
      const nextState = merge({}, action.pokemon );
      return nextState;
    default:
      return state;
  }
};