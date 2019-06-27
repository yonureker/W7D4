import { connect } from 'react-redux';
// import { selectAPokemon } from '../../reducers/selectors';
// import { requestAPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  pokemon: selectAPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAPokemon: () => dispatch(requestAPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);