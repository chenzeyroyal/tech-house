import productsAPI from "../api";

import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoadingProducts(true);
        const data = await productsAPI.getProducts();
        setProducts(data);
      } catch (err) {
        console.log("Failed to fetch products:", err);
      } finally {
        setIsLoadingProducts(false);
      }
    };

    fetchProducts();
  }, []);

  return {
    products,
    isLoadingProducts,
  };
};

export default useProducts;
