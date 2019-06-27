// ??? class PokemonIndex extends React.Component
import { PokemonIndexItem } from './pokemon_index_item';
import React from 'react';

class PokemonIndex extends React.Component {
  //??? must request all pokemons
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemon = this.props.pokemon;
    const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
    
    return (
      <section className="pokedex">
        <ul>
          {pokemonItems}
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;