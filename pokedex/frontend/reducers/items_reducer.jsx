import { RECEIVE_A_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

//??? why cant use default with 'const'
export const itemsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_A_POKEMON:
      const nextState = merge({}, action.items);
      return nextState;
    default:
      return state;
  }
};