import { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContext from './context/context';
import { fetchDataFromApi } from './api/tmdb';
import { fetchApiConfig } from './api/tmdb';

import ContentWrapper from './components/ContentWrapper';
import Homepage from './pages/Homepage';
import Explore from './pages/Explore';
import MovieDetails from './pages/MovieDetails';
import SearchResults from './pages/SearchResults';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    fetchDataFromApi("/movie/popular");
  }, [])
  

  return (
    <AppContext.Provider value={{}}>
      <div className='min-h-screen w-screen bg-[#04152d] mx-auto'>
        
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/:mediaType/:id" element={<MovieDetails />} />
            <Route path="/search/:term" element={<SearchResults />} />
            <Route path="/explore/:mediaType" element={<Explore />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
        
      </div>
    </AppContext.Provider>
    
  )
}

export default App
