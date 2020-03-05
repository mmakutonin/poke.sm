import axios from 'axios';

const typeColors = {
    normal: 'white',
    fire: 'red',
    water: 'blue',
    fighting: 'white',
    flying: 'lavender',
    grass: 'green',
    poison: 'pink',
    electric: 'amber',
    ground: 'brown',
    psychic: 'purple',
    rock: 'darkgray',
    ice: 'lightblue',
    dragon: 'deeporange',
    bug: 'lightgreen',
    ghost: 'lightgrey',
    dark: 'deeppurple',
    fairy: 'salmon',
    steel: 'bluegray',
}

const pokemonTextColor = type => typeColors[type];

export default async name => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.data)
      .then(async ({id, name, sprites, types}) => ({
        id,
        name,
        spriteUrl: sprites.front_default,
        type: types[0].type.name,
        textColor: pokemonTextColor(types[0].type.name)
      }))
  }