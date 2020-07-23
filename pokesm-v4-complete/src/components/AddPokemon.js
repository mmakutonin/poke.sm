import React, { useState } from "react";

export default function AddPokemon(props) {
  const [pokeSearch, updatePokeSearch] = useState("");

  return (
    <div className="w3-container w3-block w3-row w3-center">
      <input
        type="text"
        placeholder="Add a Pokemon"
        className="w3-input w3-threequarter"
        onChange={event => updatePokeSearch(event.target.value)}
        value={pokeSearch}
      />
      <div className="w3-quarter">
        <input
          type="button"
          value="+"
          className="w3-green w3-circle w3-button"
          onClick={() => {
            props.addPokemon(pokeSearch.toLowerCase());
            updatePokeSearch("");
          }}
        />
      </div>
    </div>
  );
}
