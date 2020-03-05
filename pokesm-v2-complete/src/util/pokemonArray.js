
const pokemonArray = [
    'chikorita',
    'absol',
    'aipom',
    'amoonguss',
    'beautifly',
    'bayleef',
    'bulbasaur',
    'caterpie',
    'clefable',
    'cottonee',
    'totodile',
    'piplup',
    'ivysaur',
    'charmander',
    'squirtle',
    'wartortle',
    'rattata'
];

export default () => pokemonArray[Math.floor(Math.random() * pokemonArray.length)];