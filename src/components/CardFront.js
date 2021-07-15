import React from 'react';

function CardFront({ name, image, powerstats, id, isFlipped, setDisplayTeam }) {
  function colorStat(stat) {
    return stat > 49 ? 'badge badge-success' : 'badge badge-danger';
  }

  function deleteCharacter() {
    const team = JSON.parse(localStorage.getItem('myTeam'));
    const newTeam = team.filter((obj) => obj.id !== id);
    setDisplayTeam(false);
    localStorage.setItem('myTeam', JSON.stringify(newTeam));
  }

  return (
    <div className="card">
      <figure>

      <img className="img-fluid card-img-top" src={image.url} alt={name} />
      </figure>
        <div className="card-body">
          <div className='h3 mb-3 uppercase font-weight-bold'>
            {name}
          </div>
          <table className='table is-narrow'>
            <tbody>
              <tr>
                <th>Intelligence</th>
                <td>
                  <span className={colorStat(powerstats.intelligence)}>
                    {powerstats.intelligence}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Power</th>
                <td>
                  <span className={colorStat(powerstats.power)}>
                    {powerstats.power}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Combat</th>
                <td>
                  <span className={colorStat(powerstats.combat)}>
                    {powerstats.combat}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Speed</th>
                <td>
                  <span className={colorStat(powerstats.speed)}>
                    {powerstats.speed}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Strength</th>
                <td>
                  <span className={colorStat(powerstats.strength)}>
                    {powerstats.strength}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Durability</th>
                <td>
                  <span className={colorStat(powerstats.durability)}>
                    {powerstats.durability}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" onClick={() => isFlipped(false)} class="btn btn-primary">Details</button>
          <button type="button" onClick={deleteCharacter} class="btn btn-secondary">Delete</button>
        </div>
      </div>

  );
}
export default CardFront;
