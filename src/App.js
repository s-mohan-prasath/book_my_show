import './App.css';
import {Routes, Route } from 'react-router-dom'
import axios from 'axios';

// React Slick js

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// react-router-dom

import HomePage from './pages/Home.page'
import MoviePage from './pages/Movie.page'
import PlayPage from './pages/Play.page'

axios.defaults.baseURL="https://api.themoviedb.org/3"
axios.defaults.params = {};
// below la REACT_APP_ ithu default aaaka irukanum , maranthudaathinga
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

console.log(process.env.MOVIEDB_API_KEY)
function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage/> }/>
      <Route path='/movie/:id' element={<MoviePage/> }/>
      <Route path='/play' element={<PlayPage/> }/>
    </Routes>
  );
}

export default App;
