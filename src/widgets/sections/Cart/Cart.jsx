import NotFound from "@/shared/ui/NotFound";
import Button from "@/shared/ui/Button";
import { useContext } from "react";
import { CartContext } from "@/entities/cart/model/context/CartContext";
import ProductList from "@/entities/product/ui/ProductList";
import Loading from "@/shared/ui/Loading";
import Section from "@/shared/ui/Section/Section";
import classNames from "classnames";

import styles from "./Cart.module.scss";

const Cart = () => {
  const { cart, clearCart, loadingCart } = useContext(CartContext);

  if (loadingCart) {
    return <Loading />;
  }

  const cartTotal = cart
    .map(({ price, quantity }) => price * quantity)
    .reduce((prev, current) => prev + current, 0)
    .toLocaleString("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
      currencyDisplay: "symbol",
    });

  const isCartEmpty = cart.length <= 0;

  return (
    <Section
      className={classNames(isCartEmpty && styles.isCartEmpty, "container")}
      title="Корзина"
      actions={
        !isCartEmpty && (
          <Button
            className={styles.clearCartButton}
            label="Очистить корзину"
            icon="trash"
            onClick={clearCart}
          />
        )
      }
    >
      {!isCartEmpty ? (
        <div className={styles.cart}>
          <ProductList items={cart} mode="large" layout="column" />
          <div className={styles.details}>
            <h3>Детали заказа</h3>
            <div className={styles.total}>
              <p>Итого</p>
              <p>{cartTotal}</p>
            </div>
            <Button
              className={styles.orderButton}
              label="Перейти к оформлению"
              isAccent
            />
          </div>
        </div>
      ) : (
        <NotFound
          title="В корзине ничего нет"
          subtitle="Добавьте товары и оформляйте покупки"
          buttonLabel="В магазин"
          icon="cart"
          href="/store"
        />
      )}
    </Section>
  );
};

export default Cart;
