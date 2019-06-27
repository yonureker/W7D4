import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container';
import { HashRouter, Route } from 'react-router-dom';
import * as APIUtils from './util/api_util';

window.fetchAPokemon = APIUtils.fetchAPokemon;
window.fetchAllPokemon = APIUtils.fetchAllPokemon;


const Root = ({ store }) => {

  return (
    <Provider store={store}>
      <HashRouter>
        <Route path='/' component={PokemonIndexContainer} />
      </HashRouter>
    </Provider>
  )
};

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});