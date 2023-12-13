import React, { createContext } from 'react'
import Products from 'src/Products_data/products';

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
