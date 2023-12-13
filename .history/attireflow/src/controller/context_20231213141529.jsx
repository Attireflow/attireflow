import React, { createContext, useState } from 'react'
import Products from '../Products_data/products';

const AppContext = createContext();



export const Context = ({ children }) => {
  const [homeProducts, setHomeProducts] = useState([]);

  const populateHomeProduct = (products) => {
    
  }
  
    
  return (
    <AppContext.Provider value={{}}>
          { children }
    </AppContext.Provider>
  );
}


export const useGlobalContext = () => {
  return useContext(AppContext);
};
