import React from 'react';

class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestAPokemon(this.props.match.params.pokemonId);
  }

  render() {
    debugger
    const { pokemon, items, loading } = this.props;
    
    return (
      <section className="pokedex">
        <ul>
        </ul>
      </section>
    );
  }
}

export default PokemonDetail;