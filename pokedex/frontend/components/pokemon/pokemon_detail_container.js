import { connect } from 'react-redux';
import { requestPokemon } from '../../actions/pokemon_actions';
// import { RECEIVE_POKEMON, RECEIVE_ALL_POKEMON } from '../../actions/pokemon_actions';
import PokemonDetail from "./pokemon_detail";

const mapStateToProps = (state, ownProps) => {
  // debugger

  return ({
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
});
};

const mapDispatchToProps = dispatch => ({
  requestPokemon: () => dispatch(requestPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
