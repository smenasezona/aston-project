import React from 'react';
import GridContainer from '../../components/GridContainer/GridContainer';
import CardItem from '../../components/CardItem/CardItem';

function Home() {
  return (
    <GridContainer>
      <CardItem onClick={() => console.log('abc')}/>
    </GridContainer>
  );
}

export default Home;