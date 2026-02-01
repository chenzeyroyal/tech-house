import { useContext } from "react";
import { FavoritesContext } from "@/entities/favorites/model/context/FavoritesContext";
import Section from "@/shared/ui/Section/Section";
import NotFound from "@/shared/ui/NotFound";
import classNames from "classnames";
import ProductList from "@/entities/product/ui/ProductList";
import Button from "@/shared/ui/Button";
import styles from "./Favorites.module.scss";

const Favorites = () => {
  const { favorites, clearFavorites } = useContext(FavoritesContext);

  const isFavoritesEmpty = favorites.length <= 0;

  return (
    <Section
      className={classNames(styles.favorites, "container")}
      title="Избранное"
      actions={
        !isFavoritesEmpty && (
          <Button
            className={styles.clearButton}
            label="Очистить избранное"
            icon="trash"
            onClick={clearFavorites}
          />
        )
      }
    >
      {favorites.length > 0 ? (
        <ProductList items={favorites} />
      ) : (
        <NotFound
          title="Здесь будут ваши избранные товары"
          subtitle="Добавьте товары, чтобы не искать их снова"
          buttonLabel="В магазин"
          icon="heart"
          href="/store"
        />
      )}
    </Section>
  );
};

export default Favorites;
