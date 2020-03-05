import React from 'react';
import getPokemonMeta from '../util/ApiCalls';
import randomPokemon from '../util/pokemonArray';

import { Card } from 'react-native-paper';
import { Text, Image } from 'react-native';

export default class PokeCard extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            pokemonMeta: {}
        }
    }

    async componentDidMount() {
        this.getPokemon();
    }

    async getPokemon() {
      this.setState({
            pokemonMeta: await getPokemonMeta(randomPokemon()),
            loading: false
      })
    }

    render() {
        if(this.state.loading) {
            return (
              <Card>
                <Text>
                  Hi from React - Now loading
                </Text>
              </Card>
            )
        }
        else {
            return (
              <Card>
                <Image
                  style={{width: 100, height: 100}}
                  source={{uri: this.state.pokemonMeta.spriteUrl}}
                />
                <Text
                  style={{fontSize: 24, fontWeight: 'bold'}}
                > {this.state.pokemonMeta.name} </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    backgroundColor: this.state.pokemonMeta.textColor}}
                > {this.state.pokemonMeta.type} </Text>
              </Card>
            )
        }
        
    }
}