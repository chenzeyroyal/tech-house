import { useContext } from "react";
import { getFormattedPrice } from "@/shared/lib/getFormattedPrice";
import { ProductCardContext } from "../../model/context/ProductCardContext/ProductCardContext";
import ProductCartButton from "./components/ProductCartButton";
import ProductFavoriteButton from "./components/ProductFavoriteButton";
import ProductQuantity from "./components/ProductQuantity";
import ProductCartDeleteButton from "./components/ProductCartDeleteButton";
import classNames from "classnames";
import styles from "./ProductActions.module.scss";
import { useLocationController } from "@/shared/lib/hooks/useLocationController";

const ProductActions = () => {
  const { price, mode, isInStock } = useContext(ProductCardContext);

  const { isOnCartPage } = useLocationController();

  return (
    <div
      className={classNames(
        styles.actions,
        styles[mode],
        isInStock && styles.isInStock
      )}
    >
      {isOnCartPage && <ProductQuantity />}
      <div className={styles.wrapper}>
        {isInStock && (
          <span className={styles.price}>{getFormattedPrice(price)}</span>
        )}
        <div className={styles.buttons}>
          {!isOnCartPage &&
            (isInStock ? <ProductCartButton /> : <span>Нет в наличии</span>)}

          {isOnCartPage && <ProductCartDeleteButton />}

          {isInStock && <ProductFavoriteButton />}
        </div>
      </div>
    </div>
  );
};

export default ProductActions;
