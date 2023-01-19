import { useState } from "react";
import List from "./List";
import { loadPokemon, loadSpecies } from "../services/api";
import Detail from "./Detail";

function Main() {
  const [pokemon, setPokemon] = useState("");
  const [species, setSpecies] = useState("");

  function backButton() {
    setPokemon("");
    console.log(pokemon);
  }

  async function handlePokemon(poke) {
    await loadPokemon(poke, setPokemon);
  }

  if (pokemon && !species) {
    loadSpecies(pokemon.id, setSpecies);
    console.log(pokemon);
  }

  console.log(species);
  return (
    <div className="Main">
      <List callback={handlePokemon} pokemon={pokemon} />
      <button onClick={backButton}>Back</button>
      <Detail pokemon={pokemon} />
    </div>
  );
}

export default Main;

// {pokemon.name}
// {pokemon.id}
// {species.base_happiness}
