import { useState } from "react";
import List from "./List";
import { loadPokemon, loadSpecies } from "../services/api";
import Detail from "./Detail";

function Main() {
  const [pokemon, setPokemon] = useState("");
  const [species, setSpecies] = useState("");
  const [detail, setDetail] = useState("");

  async function handleDetail(details) {
    setDetail(details);
  }


  function backButton() {
    setPokemon("");
    setDetail("")
    setSpecies("")
    console.log(pokemon);
  }

  async function handlePokemon(poke) {
    await loadPokemon(poke, setPokemon);
  }



  if (pokemon && !species) {
    loadSpecies(pokemon.id, setSpecies);
    console.log(pokemon);
  }

  if (species && !detail) {
    let flavor = []
     species.flavor_text_entries.forEach((text) => {
        if (text.language.name === "en" && (text.version.name === 'red' || text.version.name === 'blue')) {
            flavor.push(text.flavor_text)
            console.log(text)
        }
        if (flavor.length > 0){
        flavor[0] = flavor[0].replace(/\n/g, " ").replace(/\f/g, " ")
        setDetail(flavor[0])
        }
    })
    
  }

  console.log(species);
  return (
    <div className="Main">
      <List callback={handlePokemon} pokemon={pokemon} />
      <button onClick={backButton}>Back</button>
      <Detail pokemon={pokemon} callback={handleDetail} detail={detail}/>
    </div>
  );
}

export default Main;

// {pokemon.name}
// {pokemon.id}
// {species.base_happiness}
