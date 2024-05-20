import React,{memo} from 'react';
import Grid from '@mui/material/Grid';
import { Character } from '../../types/queryTypes';
import CardItem from '../CardItem/CardItem';

interface GridContainerProps {
  characters: Character[]
}

function GridContainer(props: GridContainerProps) {

  return (
    <Grid sx={{ flexGrow: 1,maxWidth:'1280px',margin:'0 auto' }}
      container spacing={3}
      style={{ marginTop: '20px' }}>
      <Grid item xs={12}>
        <Grid container justifyContent="start" spacing={6}>
          {props.characters && props.characters.map((character) => (
            <Grid key={character.id} item>
              <CardItem {...character} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default memo(GridContainer)