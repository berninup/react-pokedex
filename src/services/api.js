const parseJson = (response) => {
    if (response.status === 204 || response.status === 205)  {
        return null;
    }
    return response.json()
}

const request = async (url) => {
    const response = await fetch(url)
    return parseJson(response)
}

const fetchPokemonList = () => {
  let url = "https://pokeapi.co/api/v2/pokemon?limit=151";
  return request(url)
}

export const loadPokemonList = async (pokemon, setPokemon) => {
    if (pokemon.length === 0) {
        const response = await fetchPokemonList();
        setPokemon(response.results)
    }
}