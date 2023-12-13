import React, { createContext } from 'react'

const AppContext = createContext();

const 

function Context({ children }) {
    
  return (
    <AppContext value={{}}>
          <div>{ children }</div>
    </AppContext>
  );
}

export default context;