import { useEffect } from "react";
import { useState } from "react";
import { loadPokemonList } from "../services/api";

function List({ callback }) {
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
      <div onClick={handleClick} key={pokemon.name} id={pokemon.name}>
        {pokemon.name}
      </div>
    ));
  }

  if (list.length > 0) {
    return <div className="List">{pokemonList}</div>;
  } else return "Loading...";
}

export default List;
