import { useEffect } from "react";
import { useState } from "react";
import { loadPokemonList } from "../services/api";
import Image from "./Image";

function List({ callback, pokemon }) {
  const [list, setList] = useState([]);
  let pokemonList = [];

  function handleClick(e) {
    callback(e.target.id);    
  }

  useEffect(() => {
    loadPokemonList(list, setList);
  }, [list, setList]);

  if (list) {
    pokemonList = list.map((pokemon) => (
      <div className="List" onClick={handleClick} key={pokemon.name} id={pokemon.name}>
        {pokemon.name}
      </div>
    ));
  }

   if (list.length > 0 && !pokemon) {
    return <div className="List">{pokemonList}</div>;
  }
  else if (pokemon) {
    return (
        <Image pokemon={pokemon} />
    )
  }   
  else return "Loading...";
}

export default List;
