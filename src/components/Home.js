import React, { useState, useEffect } from 'react';
import Card from './Card';
import Spinner from './Spinner';
import Footer from './Footer';
import AverageSummary from './AverageSummary';

function Home({ url }) {
  const [teamHeroes, setTeamHeroes] = useState([]);
  const [displayTeam, setDisplayTeam] = useState(false);

  function deleteCharacter(index) {
    const team = JSON.parse(localStorage.getItem('myTeam'));
    team.splice(index, 1);
    setDisplayTeam(false);
    localStorage.setItem('myTeam', JSON.stringify(team));
  }

  useEffect(() => {
    function getTeam() {
      const team = JSON.parse(localStorage.getItem('myTeam')) || [];
      setTeamHeroes(team);
      setDisplayTeam(true);
    }
    getTeam();
    // eslint-disable-next-line
  }, [displayTeam]);

  return (
    <>
      <div className='container-fluid overflow-auto p-0'>
        <div className="container">
          <div className="row">
          <div className='col-12 text-center'>
          <AverageSummary teamHeroes={teamHeroes} />
        </div>
        {displayTeam ? (
          teamHeroes.map((character, i) => {
            if (character.response === 'error') {
              return (
                <div className='col-md-4' key={i}>
                  <div class="alert alert-danger" role="alert">
                   
                    <button
                      onClick={() => deleteCharacter(i)}
                      className='btn btn-danger'
                    ></button>
                     There was an error. The character had an {character.error}
                  </div>
                </div>
              );
            }
            return (
              <div className='col-md-4 ' key={i}>
                <Card character={character} setDisplayTeam={setDisplayTeam} />
              </div>
            );
          })
        ) : (
          <Spinner />
        )}

          </div>
        </div>
        <Footer teamHeroes={teamHeroes} />
      </div>
    </>
  );
}

export default Home;
