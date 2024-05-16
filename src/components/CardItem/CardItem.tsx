import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';

function CardItem() {
  return (
    <Card sx={{ minWidth: 150, position: 'relative', paddingTop: '20px' }}>
      <Button style={{ position: 'absolute', top: '5px', right: '0px'}}>
        <HighlightOffSharpIcon />
      </Button>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Название
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 170 }}
        image="https://robohash.org/38.180.2.10.png"
        title="title"
      />
      <CardActions>
        <Button size="small">Подробнее</Button>
      </CardActions>
    </Card>
  );
}

export default CardItem