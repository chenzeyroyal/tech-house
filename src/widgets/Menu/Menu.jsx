import { useMemo, useContext } from "react";
import { FavoritesContext } from "@/entities/favorites/model/context/FavoritesContext";
import { CartContext } from "@/entities/cart/model/context/CartContext";
import MenuLink from "./components/MenuLink";
import styles from "./Menu.module.scss";

const Menu = () => {
  const { favorites } = useContext(FavoritesContext);
  const { cart } = useContext(CartContext);

  const items = useMemo(
    () => [
      {
        title: "Магазин",
        href: "/store",
        icon: "store",
      },
      {
        title: "Избранное",
        href: "/favorites",
        icon: "heart",
        badge: favorites?.length > 0 && favorites?.length,
      },
      {
        title: "Корзина",
        href: "/cart",
        icon: "cart",
        badge: cart?.length > 0 && cart?.length,
      },
    ],
    [favorites, cart]
  );

  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index}>
            <MenuLink {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
