import productsLocalAPI from "./productsLocalAPI";
import productsServerAPI from "./productsServerAPI";

const isLocal = import.meta.env.VITE_STATIC_BACKEND === "true";

const productsAPI = isLocal ? productsLocalAPI : productsServerAPI;

export default productsAPI;
