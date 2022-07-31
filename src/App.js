import './App.css';
import React from 'react';
import SearchBar from './components/SearchBar';
import CocktailDisplay from './components/CocktailDisplay';
import NavBar from './components/NavBar';
import { Routes,Route } from 'react-router-dom';
import About from './components/About';
import LikeButton from './components/LikeButton';


function App() {
  return (
    <div className="App">
      <>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<SearchBar/>} />
        <Route exact path ="/about" element={<About/>} />
        <Route exact path="/contact" element={<LikeButton/>} />
      </Routes>
      </>
    </div>
  );
}

export default App;
