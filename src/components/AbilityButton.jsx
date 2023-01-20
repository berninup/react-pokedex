
function AbilityButton({ pokemon, callback }) {

    let detailFormat = []

    if (pokemon) {
        detailFormat = pokemon.abilities.map((ability) => <li key={(ability.ability.name)}>{ability.ability.name}</li>)
    }

    function sendDetail() {
        callback(detailFormat)
    }

  return (
    <div onClick={sendDetail}>
        Abilities
    </div>
  )
}

export default AbilityButton