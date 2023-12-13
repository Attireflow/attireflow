import React, { createContext } from 'react'

const AppContext = createContext();



export const Context = ({ children }) => {
    
  return (
    <AppContext.Provider value={{}}>
          { children }</div>
    </AppContext.Provider>
  );
}


export const useGlobalContext = () => {
  return useContext(AppContext);
};
