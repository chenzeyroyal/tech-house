import classNames from "classnames";
import Button from "@/shared/ui/Button";
import { useContext } from "react";
import { ProductCardContext } from "@/features/product-card/model/context/ProductCardContext/ProductCardContext";
import { CartContext } from "@/entities/cart/model/context/CartContext";
import { useProductCartStatus } from "@/features/product-card/lib/hooks/useProductCartStatus";
import styles from "./ProductCartButton.module.scss";

const ProductCartButton = () => {
  const { id, mode, isInStock, isMobile } = useContext(ProductCardContext);
  const { addToCart } = useContext(CartContext);

  const { cartProduct } = useProductCartStatus(id);

  return (
    <Button
      className={classNames(cartProduct && styles.inCart, styles.cartButton)}
      label={cartProduct ? "В корзине" : "В корзину"}
      to={cartProduct && isInStock ? "/cart" : undefined}
      icon="cart"
      isAccent
      onClick={cartProduct ? undefined : () => addToCart(id)}
      isLabelHidden={isMobile || mode === "small"}
    />
  );
};

export default ProductCartButton;
