import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Favorite from './screens/favorite/Favorite';
import Home from './screens/home/Home';
import History from './screens/history/History';


function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />}></Route>
          <Route path="/history" element={<History />}></Route>
        </Routes>
    </>
  );
}

export default App;
