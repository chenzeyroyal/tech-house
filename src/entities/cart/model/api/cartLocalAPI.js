import simulateServerDelay from "@/shared/lib/simulateServerDelay";
import localAPI from "@/shared/api/localAPI";
const STORAGE_KEY = "cart";

const cartLocalAPI = {
  getCart: async () => {
    await simulateServerDelay();
    return localAPI.read(STORAGE_KEY);
  },

  addToCart: async (product) => {
    await simulateServerDelay();
    localAPI.write(STORAGE_KEY, [...localAPI.read(STORAGE_KEY), product]);
  },

  deleteFromCart: async (id) => {
    await simulateServerDelay();

    localAPI.write(
      STORAGE_KEY,
      localAPI.read(STORAGE_KEY).filter((product) => product.id != id)
    );
  },

  updateQuantity: async (id, quantity) => {
    const cart = localAPI.read(STORAGE_KEY);
    const updatedCart = cart.map((product) =>
      product.id === id ? { ...product, quantity: quantity } : product
    );
    localAPI.write(STORAGE_KEY, updatedCart);
  },

  clearCart: async () => {
    localAPI.write(STORAGE_KEY, []);
  },
};

export default cartLocalAPI;
