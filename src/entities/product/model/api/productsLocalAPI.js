import { brandsData } from "@/app/data/brandsData";
import { categoriesData } from "@/app/data/categoriesData";
import { productsData } from "@/app/data/productsData";
import simulateServerDelay from "@/shared/lib/simulateServerDelay";

const productsLocalAPI = {
  getCategories: async () => {
    await simulateServerDelay();

    return categoriesData;
  },

  getProducts: async () => {
    await simulateServerDelay();

    return productsData;
  },

  getBrands: async () => {
    await simulateServerDelay();

    return brandsData;
  },
};

export default productsLocalAPI;
