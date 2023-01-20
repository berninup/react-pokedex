
function Stats({ pokemon, callback }) {

    let detailFormat = []

    if (pokemon) {
       detailFormat = pokemon.stats.map((stat) => <li key={stat.stat.name}>{stat.stat.name} - {stat.base_stat}</li>) 
    }

    function sendDetail() {
        callback(detailFormat)
    }


  return (
    <div onClick={sendDetail}>
        Stats
    </div>
  )
}

export default Stats