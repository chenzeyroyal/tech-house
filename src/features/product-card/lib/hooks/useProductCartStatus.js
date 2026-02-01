import { CartContext } from "@/entities/cart/model/context/CartContext";
import { useMemo, useContext } from "react";

export const useProductCartStatus = (id) => {
  const { cart } = useContext(CartContext);
  const cartProduct = useMemo(
    () => cart.find((product) => product.id === id),
    [cart, id]
  );

  return { cartProduct };
};
