import React from 'react';
import PokeCard from './components/PokeCard';

class App extends React.Component {

  render() {
    return (
      <div className='w3-container w3-row'>
        <div className='w3-third'>
          <PokeCard pokemon='squirtle' />
          <PokeCard pokemon='chikorita'/>
          <PokeCard pokemon='caterpie'/>
          <PokeCard pokemon='aipom'/>
          <PokeCard pokemon='beautifly'/>
        </div>
        <div className='w3-third'>
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
        </div>
        <div className='w3-third'>
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
        </div>
      </div>
    )
  }
}

export default App;
