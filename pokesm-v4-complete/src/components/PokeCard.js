import React, { useState, useEffect } from "react";
import getPokemonMeta from "../util/ApiCalls";
import randomPokemon from "../util/pokemonArray";

const chooseRandomSprite = (spriteUrlLength, spriteIndex, setSpriteIndex) => {
  const index = Math.floor(spriteUrlLength * Math.random());
  if (index === spriteIndex) {
    chooseRandomSprite(spriteUrlLength, spriteIndex, setSpriteIndex);
  } else {
    setSpriteIndex(index);
  }
};

export default function PokeCard(props) {
  const [loading, setLoading] = useState(true);
  const [pokemonMeta, populateMeta] = useState(null);
  const [spriteIndex, setSpriteIndex] = useState(2);
  useEffect(() => {
    (async () => {
      const pokemonMeta = await getPokemonMeta(
        props.pokemon || randomPokemon()
      );
      populateMeta(pokemonMeta);
      setLoading(false);
    })();
  }, [props, populateMeta, setLoading]);

  if (loading) {
    return <div className="w3-card w3-margin">Hi from React - Now loading</div>;
  } else {
    return (
      <div className="w3-card w3-margin w3-center">
        <img
          src={pokemonMeta.spriteUrls[spriteIndex]}
          className="w3-img"
          onClick={() =>
            chooseRandomSprite(
              pokemonMeta.spriteUrls.length,
              spriteIndex,
              setSpriteIndex
            )
          }
          alt={pokemonMeta.name + " picture"}
        />
        <h3>{pokemonMeta.name}</h3>
        <footer className={pokemonMeta.textColor + " w3-container"}>
          {pokemonMeta.type}
        </footer>
      </div>
    );
  }
}
