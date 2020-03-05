import axios from 'axios';

const typeColors = {
    normal: 'w3-black',
    fire: 'w3-red',
    water: 'w3-indigo',
    fighting: 'w3-black',
    flying: 'w3-black',
    grass: 'w3-green',
    poison: 'w3-pink',
    electric: 'w3-amber',
    ground: 'w3-brown',
    psychic: 'w3-purple',
    rock: 'w3-dark-gray',
    ice: 'w3-blue',
    dragon: 'w3-deep-orange',
    bug: 'w3-light-green',
    ghost: 'w3-grey',
    dark: 'w3-deep-purple',
    fairy: 'w3-indigo',
    steel: 'w3-blue-gray',
}

const pokemonTextColor = type => typeColors[type];

export default async name => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.data)
      .then(async ({id, name, sprites, types}) => ({
        id,
        name,
        spriteUrls: Object.values(sprites).filter(value => !!value),
        type: types[0].type.name,
        textColor: pokemonTextColor(types[0].type.name)
      }))
  }