import React, { useState } from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront';
import ReactCardFlip from 'react-card-flip';

function Card({ character, setDisplayTeam }) {
  const [flip, isFlipped] = useState(true);

  return (
    <ReactCardFlip isFlipped={!flip} flipDirection='vertical'>
      <CardFront
        name={character.name}
        image={character.image}
        powerstats={character.powerstats}
        id={character.id}
        isFlipped={isFlipped}
        setDisplayTeam={setDisplayTeam}
      />
      <CardBack
        appearance={character.appearance}
        biography={character.biography}
        image={character.image}
        work={character.work}
        name={character.name}
        isFlipped={isFlipped}
      />
    </ReactCardFlip>
  );
}
export default Card;
