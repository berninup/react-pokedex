
function Image({ pokemon }) {

    if (pokemon) {
  return (
    <div className="Image">
        <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}/>
    </div>
  )
    }
    else {
        return (
            <div className="Image"></div>
        )
    }
}

export default Image

