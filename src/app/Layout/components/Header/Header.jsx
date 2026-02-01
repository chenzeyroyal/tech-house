import Logo from "@/shared/ui/Logo";
import BurgerButton from "@/shared/ui/BurgerButton";
import CategoryMenu from "@/widgets/CategoryMenu";
import Search from "@/features/search/ui";
import Menu from "@/widgets/Menu";
import { useState, useEffect } from "react";

import styles from "./Header.module.scss";
import { useLocationController } from "@/shared/lib/hooks/useLocationController";

const Header = () => {
  const categoryMenuId = "category-menu";

  const [isExpanded, setIsExpanded] = useState(false);
  const onBurgerButton = () => {
    setIsExpanded((prev) => !prev);
  };

  const { pathname } = useLocationController();

  useEffect(() => {
    setIsExpanded(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.searchBar}>
        <BurgerButton
          label="Каталог"
          menuId={categoryMenuId}
          isBurger
          isAccent
          isActive={isExpanded}
          onClick={onBurgerButton}
        />
        <Search />
      </div>

      <CategoryMenu id={categoryMenuId} isExpanded={isExpanded} />

      <Menu />
    </header>
  );
};

export default Header;
