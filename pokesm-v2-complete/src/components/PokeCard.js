import React from 'react';
import getPokemonMeta from '../util/ApiCalls';
import randomPokemon from '../util/pokemonArray';

export default class PokeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            pokemonMeta: {},
            spriteIndex: 2
        }
    }

    async componentDidMount() {
        this.setState({
            pokemonMeta: await getPokemonMeta(this.props.pokemon || randomPokemon()),
            loading: false
        })
    }

    chooseRandomSprite() {
       const index = Math.floor(this.state.pokemonMeta.spriteUrls.length * Math.random())
       if(index === this.state.spriteIndex) {
           this.chooseRandomSprite()
       }
       else {
           this.setState({spriteIndex: index})
       }
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
                        src={this.state.pokemonMeta.spriteUrls[this.state.spriteIndex]}
                        className='w3-img'
                        onClick={this.chooseRandomSprite.bind(this)}
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