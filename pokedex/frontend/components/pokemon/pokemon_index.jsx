import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (

    <div>

      {this.props.pokemon.map(poke => <li key={poke.id}>{poke.name}<img src={poke.imageUrl} /></li>)}

    </div>

  );}
}

export default PokemonIndex;
