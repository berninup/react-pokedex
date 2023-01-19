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

const fetchPokemon = (pokemon) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  return request(url)
}

const fetchSpecies = (pokemon) => {
  let url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;
  return request(url)
}

export const loadPokemonList = async (pokemon, setPokemon) => {
    if (pokemon.length === 0) {
        const response = await fetchPokemonList();
        setPokemon(response.results)
    }
}

export const loadPokemon = async (pokemon , setPokemon) => {
    const response = await fetchPokemon(pokemon)
    setPokemon(response)
}

export const loadSpecies = async (pokemon, setPokemon) => {
    const response = await fetchSpecies(pokemon)
    setPokemon(response)
}