import React, { createContext } from 'react'
import Produ

const AppContext = createContext();



export const Context = ({ children }) => {
    
  return (
    <AppContext.Provider value={{}}>
          { children }
    </AppContext.Provider>
  );
}


export const useGlobalContext = () => {
  return useContext(AppContext);
};
