import { Link } from 'react-router-dom';
import React from 'react';

const pokemonIndexItem = ({ pokemon }) => {

  return (
    <li>
      <Link to={`/pokemon/${pokemon.id}`}>
        {pokemon.name}
        <img src={pokemon.imageUrl} />
      </Link>
    </li>
  );
};



export default pokemonIndexItem;
