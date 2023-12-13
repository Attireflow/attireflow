import React, { createContext, useEffect, useMemo, useState } from 'react'
import Products from '../Products_data/products';

const AppContext = createContext();



export const Context = ({ children }) => {
  const [homeProducts, setHomeProducts] = useState([]);

  const populateHomeProduct = useMemo((products) => {
    const filteredProducts = products.splice(0, 6);

    setHomeProducts(filteredProducts);
  })
  
  useEffect(() => {
    populateHomeProduct(Products)
  }, []);
    
  return (
    <AppContext.Provider value={{}}>
          { children }
    </AppContext.Provider>
  );
}


export const useGlobalContext = () => {
  return useContext(AppContext);
};
