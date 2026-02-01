import { useState, useEffect, useContext, useCallback } from "react";
import { ProductsContext } from "@/entities/product/model/context/ProductsContext/ProductsContext";
import { NotificationsContext } from "@/features/notifications/model/context/NotificationsContext";
import cartAPI from "../api";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [loadingCart, setLoadingCart] = useState(false);
  const { products } = useContext(ProductsContext);
  const { addNotification } = useContext(NotificationsContext);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoadingCart(true);
        const data = await cartAPI.getCart();
        setCart(data);
      } catch (err) {
        console.log("Failed to fetch products:", err);
      } finally {
        setLoadingCart(false);
      }
    };
    fetchCart();
  }, []);

  const addToCart = useCallback(
    (id, quantity = 1, notification = true) => {
      const addedProduct = products.find((product) => product.id === id);

      cartAPI.addToCart(addedProduct).then(() => {
        setCart((prevCart) => [...prevCart, addedProduct]);
        updateQuantity(id, quantity);

        if (!notification) return;
        addNotification({
          type: "add",
          message: `Товар добавлен в корзину`,
          button: {
            href: "/cart",
            icon: "cart",
          },
        });
      });
    },
    [products, addNotification]
  );

  const deleteFromCart = useCallback(
    (id) => {
      const deletedProduct = cart.find((product) => product.id === id);

      cartAPI.deleteFromCart(id).then(() => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== id));

        addNotification({
          type: "delete",
          message: `Товар удалён из корзины`,
          button: {
            action: () => addToCart(id, deletedProduct.quantity, false),
            label: "Вернуть товар в корзину",
            icon: "arrow-rotate",
          },
        });
      });
    },
    [cart, addToCart, addNotification]
  );

  const updateQuantity = useCallback((id, newQuantity) => {
    cartAPI.updateQuantity(id, newQuantity).then(() => {
      setCart((prevCart) =>
        prevCart.map((product) =>
          product.id === id ? { ...product, quantity: newQuantity } : product
        )
      );
    });
  }, []);

  const clearCart = useCallback(() => {
    cartAPI.clearCart(cart).then(() => {
      addNotification({
        type: "delete",
        message: `Корзина очищена`,
        button: {
          action: () => {
            cart.map(({ id, quantity }) => addToCart(id, quantity, false));
          },
          label: "Вернуть товары в корзину",
          icon: "arrow-rotate",
        },
      });

      setCart([]);
    });
  }, [cart, addToCart, addNotification]);

  return {
    cart,
    addToCart,
    deleteFromCart,
    clearCart,
    updateQuantity,
    loadingCart,
  };
};

export default useCart;
