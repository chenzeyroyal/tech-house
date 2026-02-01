import { useLocation } from "react-router-dom";

const paths = {
  home: "/",
  categories: "/categories",
  favorites: "/favorites",
  cart: "/cart",
  store: "/store",
};

export const useLocationController = () => {
  const { pathname } = useLocation();

  const idLocation = location.pathname.split("/").filter(Boolean)[1];

  const isOnHomePage = pathname === paths.home;
  const isOnFavoritesPage = pathname === paths.favorites;
  const isOnCartPage = pathname === paths.cart;
  const isOnCategoryPage =
    pathname === paths.categories || pathname.startsWith(paths.categories);

  return {
    pathname,
    idLocation,
    isOnHomePage,
    isOnFavoritesPage,
    isOnCartPage,
    isOnCategoryPage,
  };
};
