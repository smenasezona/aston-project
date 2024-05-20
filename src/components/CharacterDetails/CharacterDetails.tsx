import React, { memo } from 'react';
import { Character } from '../../types/queryTypes'

interface CharacterDetailsProps {
  character: Character
}

function CharacterDetails(props: CharacterDetailsProps) {

  return (
    <div>
      <h1>{props.character.name}</h1>
      <p>{props.character.status}</p>
      <p>{props.character.species}</p>
      <p>{props.character.gender}</p>
    </div>
  );
};

export default memo(CharacterDetails)