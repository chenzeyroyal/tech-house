import classNames from "classnames";
import Icon from "@/shared/ui/Icon";
import styles from "./MenuLink.module.scss";
import { Link } from "react-router-dom";
import { memo } from "react";
import { useLocationController } from "@/shared/lib/hooks/useLocationController";

const MenuLink = (props) => {
  const { href, title, icon, badge } = props;

  const { pathname } = useLocationController();

  const isActive = href === pathname;

  return (
    <Link
      className={classNames(styles.menuLink, isActive && styles.isActive)}
      to={href}
    >
      <Icon name={icon} size={25} />
      <span>{title}</span>
      {badge && <span className={styles.badge}>{badge}</span>}
    </Link>
  );
};

export default memo(MenuLink);
