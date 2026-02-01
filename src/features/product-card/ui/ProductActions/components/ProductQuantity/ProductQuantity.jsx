import { useProductQuantity } from "./hooks/useProductQuantity";
import { CartContext } from "@/entities/cart/model/context/CartContext";
import { useContext } from "react";
import { useProductCartStatus } from "@/features/product-card/lib/hooks/useProductCartStatus";
import { ProductCardContext } from "@/features/product-card/model/context/ProductCardContext/ProductCardContext";
import Button from "@/shared/ui/Button";
import classNames from "classnames";
import styles from "./ProductQuantity.module.scss";

const ProductQuantity = () => {
  const { id } = useContext(ProductCardContext);

  const { updateQuantity } = useContext(CartContext);

  const { cartProduct } = useProductCartStatus(id);

  const {
    MIN_QUANTITY,
    MAX_QUANTITY,
    handleQuantityChange,
    handleIncrement,
    handleDecrement,
  } = useProductQuantity(id, updateQuantity);

  const quantity = cartProduct ? cartProduct.quantity : MIN_QUANTITY;

  return (
    <div className={styles.quantity}>
      <Button
        className={classNames(styles.quantityButton)}
        label="Уменьшить количество товара на 1"
        mode="circle"
        icon="minus"
        isLabelHidden
        disabled={quantity === MIN_QUANTITY}
        onClick={() => handleDecrement(quantity)}
      />
      <input
        className={styles.quantityInput}
        type="number"
        inputMode="numeric"
        min={MIN_QUANTITY}
        max={MAX_QUANTITY}
        onChange={handleQuantityChange}
        value={quantity || MIN_QUANTITY}
      />
      <Button
        className={styles.quantityButton}
        label="Увеличить количество товара на 1"
        mode="circle"
        icon="plus"
        isLabelHidden
        onClick={() => handleIncrement(quantity)}
      />
    </div>
  );
};

export default ProductQuantity;
