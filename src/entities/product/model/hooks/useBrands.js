import { useEffect, useState } from "react";
import productsAPI from "@/entities/product/model/api";

export const useBrands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    productsAPI.getBrands().then(setBrands);
  }, []);

  return {
    brands,
  };
};
