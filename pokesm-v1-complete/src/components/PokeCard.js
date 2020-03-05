import React from 'react';
import getPokemonMeta from '../util/ApiCalls';
import randomPokemon from '../util/pokemonArray';

export default class PokeCard extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            pokemonMeta: {}
        }
    }

    async componentDidMount() {
        this.setState({
            pokemonMeta: await getPokemonMeta(randomPokemon()),
            loading: false
        })
    }

    render() {
        if(this.state.loading) {
            return (
                <div className='w3-card w3-margin'>
                    Hi from React - Now loading
                </div>
            )
        }
        else {
            return (
                <div className='w3-card w3-margin w3-center'>
                    <img
                        src={this.state.pokemonMeta.spriteUrl}
                        className='w3-img'
                    />
                    <h3>{this.state.pokemonMeta.name}</h3>
                    <footer className={this.state.pokemonMeta.textColor + ' w3-container'}>
                        {this.state.pokemonMeta.type}
                    </footer>
                </div>
            )
        }
        
    }
}