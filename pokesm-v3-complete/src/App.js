import React from 'react';
import PokeCard from './components/PokeCard';
import randomPokemon from './util/pokemonArray';
import AddPokemon from './components/AddPokemon';

class App extends React.Component {
  constructor() {
    super();
    let pokemon = [];
    for(let i=0; i<9; i++) {
      pokemon.push(randomPokemon())
    }
    this.state = {
      pokemon
    }
  }

  splitPokemonIntoColumns(pokemon) {
    const colSize = pokemon.length / 3;
    return [
      pokemon.slice(colSize*2, pokemon.length),
      pokemon.slice(colSize, colSize*2),
      pokemon.slice(0,colSize)
    ]
  }

  convertPokemonNameToComponent(name, index) {
    return (<PokeCard pokemon={name} key={index}/>)
  }

  addPokemonToState(pokemonName) {
    this.setState({
      pokemon: [
        pokemonName,
        ...this.state.pokemon
      ]
    })
  }

  render() {
    const cols = this.splitPokemonIntoColumns(
      this.state.pokemon
        .slice(0)
        .reverse()
        .map((name, index) => this.convertPokemonNameToComponent(name, index))
    )

    return (
      <div className='w3-container w3-row'>
        <AddPokemon addPokemon={this.addPokemonToState.bind(this)} />
        <div className='w3-third'>
          {
            cols[0]
          }
        </div>
        <div className='w3-third'>
          {
            cols[1]
          }
        </div>
        <div className='w3-third'>
          {
            cols[2]
          }
        </div>
      </div>
    )
  }
}

export default App;