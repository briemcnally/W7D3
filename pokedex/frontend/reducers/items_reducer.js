import { RECEIVE_POKEMON, RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const itemReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default itemReducer;
