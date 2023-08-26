import { useState, useEffect, createContext } from 'react';
import AppContext from './context/context';
import { fetchDataFromApi } from './api/tmdb';

function App() {

  const [trendingMovies, setTrendingMovies] = useState();
  const [popularMovies, setPopularMovies] = useState();


  // const trending = fetchDataFromApi("/trending/movie/day");
  // const popular = fetchDataFromApi("/movie/popular");

  useEffect(() => {
    fetchDataFromApi("/movie/popular");
  }, [])
  

  return (
    <AppContext.Provider value={{}}>
      <div className='bg-black'>Hi</div>
    </AppContext.Provider>
    
  )
}

export default App
