import favoritesLocalAPI from "./favoritesLocalAPI";
import favoritesServerAPI from "./favoritesServerAPI";

const isLocal = import.meta.env.VITE_STATIC_BACKEND === "true";

const favoritesAPI = isLocal ? favoritesLocalAPI : favoritesServerAPI;

export default favoritesAPI;
