import React, { memo, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Character } from '../../types/queryTypes'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

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
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='name' secondary={props.character.name} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='status' secondary={props.character.status} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='species' secondary={props.character.species} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='gender' secondary={props.character.gender} />
      </ListItem>
    </List>
  );
}

export default memo(CharacterDetails);