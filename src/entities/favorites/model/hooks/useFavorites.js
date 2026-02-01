import { useState, useContext, useEffect, useCallback } from "react";
import { ProductsContext } from "@/entities/product/model/context/ProductsContext/ProductsContext";
import { NotificationsContext } from "@/features/notifications/model/context/NotificationsContext";
import favoritesAPI from "../api";
import { useLocationController } from "@/shared/lib/hooks/useLocationController";

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const { products } = useContext(ProductsContext);
  const { addNotification } = useContext(NotificationsContext);
  const { isOnFavoritesPage } = useLocationController();

  useEffect(() => {
    favoritesAPI.getFavorites().then(setFavorites);
  }, []);

  const addToFavorites = useCallback(
    (id) => {
      const addedProduct = products.find((product) => product.id === id);

      favoritesAPI.addToFavorites(addedProduct).then(() => {
        setFavorites((prev) => [...prev, addedProduct]);
      });
    },
    [products]
  );

  const deleteFromFavorites = useCallback(
    (id) => {
      favoritesAPI.deleteFromFavorites(id).then(() => {
        setFavorites((prev) => prev.filter((product) => product.id !== id));

        if (!isOnFavoritesPage) return;
        addNotification({
          type: "delete",
          message: "Товар удалён из избранного",
          button: {
            label: "Вернуть товар в избранное",
            action: () => addToFavorites(id),
            icon: "arrow-rotate",
          },
        });
      });
    },
    [addNotification, addToFavorites, isOnFavoritesPage]
  );

  const clearFavorites = useCallback(() => {
    favoritesAPI.clearFavorites(favorites).then(() => {
      addNotification({
        type: "delete",
        message: `Избранное очищено`,
        button: {
          action: () => {
            favorites.map(({ id, quantity }) =>
              addToFavorites(id, quantity, false)
            );
          },
          label: "Вернуть товары в избранное",
          icon: "arrow-rotate",
        },
      });

      setFavorites([]);
    });
  }, [favorites, addToFavorites, setFavorites, addNotification]);

  return {
    favorites,
    addToFavorites,
    deleteFromFavorites,
    clearFavorites,
  };
};

export default useFavorites;
