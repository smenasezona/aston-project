import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { Character } from '../../types/queryTypes'

interface CharacterDetailsProps {
  character?: Character;
}

function CharacterDetails(props: CharacterDetailsProps) {
  const location = useLocation();
  const { character } = location.state || {};

  if (!props.character) {
    return <div>Описание отсутствует</div>;
  }

  return (
    <div>
      <h1>{props.character.name}</h1>
      <p>{props.character.status}</p>
      <p>{props.character.species}</p>
      <p>{props.character.gender}</p>
    </div>
  );
}

export default memo(CharacterDetails);