import { useContext } from "react";
import { CartContext } from "@/entities/cart/model/context/CartContext";
import { ProductCardContext } from "@/features/product-card/model/context/ProductCardContext/ProductCardContext";
import Button from "@/shared/ui/Button";
import styles from "./ProductCartDeleteButton.module.scss";

const ProductCartDeleteButton = () => {
  const { id } = useContext(ProductCardContext);

  const { deleteFromCart } = useContext(CartContext);

  return (
    <Button
      className={styles.deleteButton}
      label="Удалить из корзины"
      icon="trash"
      isLabelHidden
      onClick={() => deleteFromCart(id)}
    />
  );
};

export default ProductCartDeleteButton;
