import React from 'react';
import { Link } from 'react-router-dom';

//??? need to pass {pokemon} to PokemonIndexItem function
export const PokemonIndexItem = ({pokemon}) => {
  return (
    <li>
      <Link to='/pokemon/:pokemonId'>
        {pokemon.name}
        <img src={pokemon.image_url} />
      </Link>
    </li>
  )
}