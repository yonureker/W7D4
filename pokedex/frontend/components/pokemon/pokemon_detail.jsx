// ??? class PokemonIndex extends React.Component
import React from 'react';

class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestAPokemon(this.props.match.params.pokemonId);
  }

  render() {
    // props will have pokemon and items
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