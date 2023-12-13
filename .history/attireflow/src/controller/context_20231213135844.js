import React, { createContext } from 'react'

const AppContext = createContext();



function Context({children}) {
  return (
    <AppContext >
          <div>{ }</div>
    </AppContext>
  );
}

export default context;