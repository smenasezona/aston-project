import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Character } from '../../types/queryTypes'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { fetchCharactersById } from '../../api/api';



function CharacterDetails() {
  const { id } = useParams()
  const [character, setCharacter] = useState<Character | null>(null)

  useEffect(() => {
    if (typeof id !== 'undefined') {
      fetchCharactersById(+id).then((res) => { setCharacter(res) }).catch(() => { setCharacter(null) })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!character) {
    return <div>Описание отсутствует</div>;
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='name' secondary={character.name} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='status' secondary={character.status} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='species' secondary={character.species} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='gender' secondary={character.gender} />
      </ListItem>
    </List>
  );
}

export default memo(CharacterDetails);