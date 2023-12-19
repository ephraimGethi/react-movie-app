import { useState,useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//e5cd670b
const API_URL = 'http://www.omdbapi.com?apikey=e5cd670b';
const App = ()=>{
  const [movies,setMovies] = useState([]);
const searchMovies = async(title)=>{
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  setMovies(data.Search);
}
  useEffect(()=>{
searchMovies('spiderman');
  },[]);
  return (
    <div className='app'>
 <h1>MOVIES REPO</h1>
 <div className='search'>
<input 
placeholder='search for movie' value='spiderman' onChange={()=>{}}/>
<img 
src={SearchIcon} alt="search" onClick={()=>{}}/>
 </div>
 {movies?.length > 0 
  ? (<div className='container'>
 {movies.map((movie)=>(
  <MovieCard movie={movie}/>
 ))}
   </div>):(
    <div className='empty'>
<h2>no movies found</h2>
    </div>
   )
 }
    </div>
  );
}

export default App;
