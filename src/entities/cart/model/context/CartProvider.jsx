import useCart from "../hooks/useCart";
import { CartContext } from "./CartContext";

export const CartProvider = (props) => {
  const { children } = props;

  const {
    cart,
    addToCart,
    deleteFromCart,
    clearCart,
    updateQuantity,
    loadingCart,
  } = useCart();

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteFromCart,
        clearCart,
        updateQuantity,
        loadingCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
