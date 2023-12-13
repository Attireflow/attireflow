import React, { createContext } from 'react'
import Products from '../';

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
