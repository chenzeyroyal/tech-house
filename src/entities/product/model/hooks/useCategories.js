import { useState, useEffect } from "react";
import productsAPI from "@/entities/product/model/api";

export const useCategories = (categoryId) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    productsAPI.getCategories(categoryId).then((response) => {
      setCategories(response);
    });
  }, [categoryId]);

  return { categories };
};
