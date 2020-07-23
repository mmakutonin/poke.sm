import React, { useState, useMemo } from "react";
import PokeCard from "./components/PokeCard";
import randomPokemon from "./util/pokemonArray";
import AddPokemon from "./components/AddPokemon";

const createRandomPokemonArray = () => {
  let pokemon = [];
  for (let i = 0; i < 9; i++) {
    pokemon.push(randomPokemon());
  }
  return pokemon;
};

const splitPokemonIntoColumns = pokemon => {
  pokemon = pokemon
    .slice(0)
    .reverse()
    .map((name, index) => <PokeCard pokemon={name} key={index} />);
  const colSize = pokemon.length / 3;
  return [
    pokemon.slice(colSize * 2, pokemon.length),
    pokemon.slice(colSize, colSize * 2),
    pokemon.slice(0, colSize)
  ];
};

export default function App() {
  const [pokemon, setPokemon] = useState(createRandomPokemonArray());
  const cols = useMemo(() => splitPokemonIntoColumns(pokemon), [pokemon]);

  return (
    <div className="w3-container w3-row">
      <AddPokemon
        addPokemon={pokemonName => setPokemon([pokemonName, ...pokemon])}
      />
      <div className="w3-third">{cols[0]}</div>
      <div className="w3-third">{cols[1]}</div>
      <div className="w3-third">{cols[2]}</div>
    </div>
  );
}
