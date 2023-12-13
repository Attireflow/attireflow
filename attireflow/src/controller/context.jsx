import React, {
  createContext,
  useCallback,
  useEffect,
  useContext,
  useState,
} from "react";
import Products from "/src/Products_data/products";

const AppContext = createContext();

function Context({ children }) {
  const [products, setProducts] = useState([]);
  const [homeProducts, setHomeProducts] = useState([]);

  useEffect(() => {
    populateProducts(Products);
    populateHomeProduct(Products);
  }, []);

  const populateProducts = (products) => {
    setProducts((prevState) => [...prevState, ...products]);
  };

  const populateHomeProduct = useCallback((products) => {
    const filteredProducts = products.splice(0, 6);

    setHomeProducts(filteredProducts);
  });
  

  return (
    <AppContext.Provider value={{ homeProducts, products }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default Context;
