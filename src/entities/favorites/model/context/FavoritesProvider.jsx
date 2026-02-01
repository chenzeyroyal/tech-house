import useFavorites from "../hooks/useFavorites";
import { FavoritesContext } from "./FavoritesContext";

export const FavoritesProvider = (props) => {
  const { children } = props;
  const { favorites, addToFavorites, deleteFromFavorites, clearFavorites } =
    useFavorites();

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        deleteFromFavorites,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
