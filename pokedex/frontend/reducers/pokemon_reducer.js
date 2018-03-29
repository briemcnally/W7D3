import { RECEIVE_POKEMON, RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
    let newState = merge({}, state, action.pokemon);
      return action.pokemon;
    case RECEIVE_POKEMON:
    // take existing state
    // merge existing state with empty obje
    // key into the "newState" at the specific id of the pokemon just received form db
    // update that specific pokemon with new information in global state
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonReducer;
