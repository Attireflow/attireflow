import React, { createContext } from 'react'

const AppContext = createContext();



function Context({children}) {
  return (
    <AppContext >
          <div>{ children }</div>
    </AppContext>
  );
}

export default context;