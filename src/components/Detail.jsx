import { useState } from "react"
import Image from "./Image"

function Detail({ pokemon, species }) {

    const [detail, setDetail] = useState("")

  return (
    <div className="Detail">
        <div className="PokemonName">
        <h2>{pokemon.name}</h2>
        </div>
        <div className="DetailData">

        </div>
    </div>
  )
}

export default Detail