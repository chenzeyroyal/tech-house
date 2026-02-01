import simulateServerDelay from "@/shared/lib/simulateServerDelay";
import localAPI from "@/shared/api/localAPI";
const STORAGE_KEY = "favorites";

const favoritesLocalAPI = {
  getFavorites: async () => {
    await simulateServerDelay();
    return localAPI.read(STORAGE_KEY);
  },

  addToFavorites: async (product) => {
    await simulateServerDelay();
    localAPI.write(STORAGE_KEY, [...localAPI.read(STORAGE_KEY), product]);
  },

  deleteFromFavorites: async (id) => {
    await simulateServerDelay();
    localAPI.write(
      STORAGE_KEY,
      localAPI.read(STORAGE_KEY).filter((product) => product.id != id)
    );
  },

  clearFavorites: async () => {
    await simulateServerDelay();
    localAPI.write(STORAGE_KEY, []);
  },
};

export default favoritesLocalAPI;
