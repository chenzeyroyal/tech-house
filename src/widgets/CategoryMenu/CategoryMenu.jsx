import classNames from "classnames";
import Icon from "@/shared/ui/Icon";
import { useCategories } from "@/entities/product/model/hooks/useCategories";
import { Link } from "react-router-dom";
import { memo } from "react";

import styles from "./CategoryMenu.module.scss";

const CategoryMenu = (props) => {
  const { id, isExpanded } = props;

  const { categories } = useCategories();

  return (
    <nav
      className={classNames(styles.menu, isExpanded && styles.isExpanded)}
      id={id}
    >
      <ul className={styles.list}>
        {categories.map(({ title, icon, id }, index) => (
          <li className="" key={index}>
            <Link to={`/categories/${id}`} className={styles.link}>
              <Icon name={icon} fill="none" />
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(CategoryMenu);
