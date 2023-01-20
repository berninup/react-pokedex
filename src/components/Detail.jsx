
import AbilityButton from "./AbilityButton";

function Detail({ pokemon, species, callback, detail }) {

    function handleDetail(data) {
        callback(data)
    }

  return (
    <div className="Detail">
      <div className="PokemonName">
        <h2>{pokemon.name}</h2>
      </div>
      <div className="DetailData">{detail}</div>
      <div className="Buttons">
        <AbilityButton callback={handleDetail} pokemon={pokemon} />
      </div>
    </div>
  );
}

export default Detail;
