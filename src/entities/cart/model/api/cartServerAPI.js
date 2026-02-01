const URL = "http://localhost:3001/cart";

const headers = {
  "Content-Type": "application/json",
};

const cartServerAPI = {
  getCart: async () => {
    const response = await fetch(URL);
    return response.json();
  },

  addToCart: async (product) => {
    const response = await fetch(URL, {
      method: "POST",
      headers,
      body: JSON.stringify(product),
    });
    return response.json();
  },

  deleteFromCart: async (id) => {
    const response = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });

    return response.json();
  },

  updateQuantity: async (id, quantity) => {
    const response = await fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ quantity }),
    });

    return response.json();
  },

  clearCart: async (products) => {
    return Promise.all(
      products.map(({ id }) => cartServerAPI.deleteFromCart(id))
    );
  },
};

export default cartServerAPI;
