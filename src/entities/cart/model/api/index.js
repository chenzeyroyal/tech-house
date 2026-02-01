import cartLocalAPI from "./cartLocalAPI";
import cartServerAPI from "./cartServerAPI";

const isLocal = import.meta.env.VITE_STATIC_BACKEND === "true";

const cartAPI = isLocal ? cartLocalAPI : cartServerAPI;

export default cartAPI;
