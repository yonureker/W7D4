import { connect } from 'react-redux';
import { selectAPokemon } from '../../reducers/selectors';
import { requestAPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

// ??? ownProps WHY
const mapStateToProps = (state, ownProps) => {
  // ??? why aren't we using selectAPokemon here?
  const pokemon = state.entities.pokemon[ownProps.match.params.pokemonId];

  // ??? why are we passing items here
  return {
    pokemon,
    items: selectAPokemon(state, pokemon)
  };
};

const mapDispatchToProps = dispatch => ({
  requestAPokemon: id => dispatch(requestAPokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);