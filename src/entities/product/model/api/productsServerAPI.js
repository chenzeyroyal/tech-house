const URL = "http://localhost:3001";

const productsServerAPI = {
  getCategories: async (categoryId) => {
    const categoryURL = categoryId
      ? `${URL}/categories?id=${categoryId}`
      : `${URL}/categories`;
    const response = await fetch(categoryURL);
    return response.json();
  },

  getProducts: async () => {
    const response = await fetch(`${URL}/products`);
    return response.json();
  },

  getBrands: async () => {
    const response = await fetch(`${URL}/brands`);

    return response.json();
  },
};

export default productsServerAPI;
