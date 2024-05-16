import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Favorite from './screens/favorite/Favorite';
import Home from './screens/home/Home';
import History from './screens/history/History';
import GridContainer from './components/GridContainer/GridContainer';
import CardItem from './components/CardItem/CardItem';


function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />}></Route>
          <Route path="/history" element={<History />}></Route>
        </Routes>
      </BrowserRouter>
      <GridContainer>
        <CardItem />
      </GridContainer>
    </>
  );
}

export default App;
