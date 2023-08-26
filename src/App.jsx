import { useState, useEffect, createContext } from 'react';
import AppContext from './context/context';

function App() {

  return (
    <AppContext.Provider value={{}}>
      <div className='bg-black'>Hi</div>
    </AppContext.Provider>
    
  )
}

export default App
