import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Character } from '../../types/queryTypes'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { fetchCharactersById } from '../../api/api';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import WcIcon from '@mui/icons-material/Wc';
import AbcIcon from '@mui/icons-material/Abc';
import AdbIcon from '@mui/icons-material/Adb';
import ExposureIcon from '@mui/icons-material/Exposure';
import LocationOnIcon from '@mui/icons-material/LocationOn';



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
    return (
      <Box sx={{ display: 'flex', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AbcIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Name' secondary={character.name} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ExposureIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Status' secondary={character.status} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AdbIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Species' secondary={character.species} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WcIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Gender' secondary={character.gender} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocationOnIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Location' secondary={character.location.name} />
      </ListItem>
    </List>
  );
}

export default memo(CharacterDetails);