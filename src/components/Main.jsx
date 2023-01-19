import { useState } from "react";
import List from "./List";
import { loadPokemon, loadSpecies } from "../services/api";

function Main() {
  const [pokemon, setPokemon] = useState("");
  const [species, setSpecies] = useState("");

  async function handlePokemon(poke) {
    await loadPokemon(poke, setPokemon);
  }

  if (pokemon && !species) {
    loadSpecies(pokemon.id, setSpecies);
    console.log(species)
  }

  if (!pokemon) {
    return (
      <div className="Main">
        <List callback={handlePokemon} />
      </div>
    );
  }
  if (pokemon) {
    console.log(species)
    return (
      <div className="Main">
        {pokemon.name}
        {pokemon.id}
        {species.base_happiness}
      </div>
    );
  }
}

export default Main;
