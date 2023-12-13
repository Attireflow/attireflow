import React, { createContext } from 'react'

const AppContext = createContext();



function Context({ children }) {
    
  return (
    <AppContext value={{}}>
          <div>{ children }</div>
    </AppContext>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};


export default context;