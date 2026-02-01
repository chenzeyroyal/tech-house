import classNames from "classnames";
import Button from "@/shared/ui/Button";
import { useContext, useMemo } from "react";
import { ProductCardContext } from "@/features/product-card/model/context/ProductCardContext/ProductCardContext";
import { FavoritesContext } from "@/entities/favorites/model/context/FavoritesContext";

import styles from "./ProductFavoriteButton.module.scss";

const ProductFavoriteButton = () => {
  const { id } = useContext(ProductCardContext);

  const { favorites, addToFavorites, deleteFromFavorites } =
    useContext(FavoritesContext);

  const isActive = useMemo(
    () => favorites.some((product) => product.id === id),
    [favorites, id]
  );

  return (
    <Button
      className={classNames(styles.favButton, isActive && styles.isFavorite)}
      label={isActive ? "Удалить из избранного" : "Добавить в избранное"}
      icon="heart"
      isLabelHidden
      onClick={() => (isActive ? deleteFromFavorites(id) : addToFavorites(id))}
    />
  );
};

export default ProductFavoriteButton;
