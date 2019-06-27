import merge from 'lodash/merge';

export const uiReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    // case RECEIVE_ALL_POKEMON:
    //   const nextState = merge({}, );
    //   return nextState;
    default:
      return state;
  }
};