import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store'; 

const store = configureStore();

window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;

window.getState = store.getState;
window.dispatch = store.dispatch;
 
document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();

  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});