import { combineReducers } from 'redux';
import itemReducer from './items_reducer';
import pokemonReducer from './pokemon_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  item: itemReducer
});

export default entitiesReducer;
