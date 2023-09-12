import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavouritePages from './pages/FavouritePages';
import Navigation from './components/Navigation';
import './index.css'


function App() {
  return (
    <>

      <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/favourite' element={<FavouritePages/>}/>
      </Routes>
    </>
  );
}

export default App;
