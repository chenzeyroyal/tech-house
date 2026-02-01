const URL = "http://localhost:3001/favorites";

const headers = {
  "Content-Type": "application/json",
};

const favoritesServerAPI = {
  getFavorites: async () => {
    const response = await fetch(URL);
    return response.json();
  },

  addToFavorites: async (product) => {
    const response = await fetch(URL, {
      method: "POST",
      headers,
      body: JSON.stringify(product),
    });

    return response.json();
  },

  deleteFromFavorites: async (id) => {
    const response = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    return response.json();
  },

  clearFavorites: async (products) => {
    return Promise.all(
      products.map(({ id }) => favoritesServerAPI.deleteFromFavorites(id))
    );
  },
};

export default favoritesServerAPI;
