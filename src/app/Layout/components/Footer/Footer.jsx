import Logo from "@/shared/ui/Logo";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { useBrands } from "@/entities/product/model/hooks/useBrands";
import { useCategories } from "@/entities/product/model/hooks/useCategories";

const Footer = () => {
  const { categories } = useCategories();
  const { brands } = useBrands();

  return (
    <footer className={styles.footer}>
      <Logo />
      <div className={styles.columns}>
        <div className={styles.column}>
          <h4 className={styles.listTitle}>Категории</h4>
          <ul className={styles.gridList}>
            {categories.map(({ id, title }) => (
              <li key={id}>
                <Link className={styles.link} to={`/categories/${id}`}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.listTitle}>Бренды</h4>
          <ul className={styles.gridList}>
            {brands.map(({ id, title }) => (
              <li key={id}>
                <Link className={styles.link} to={`/brands/${id}`}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.listTitle}>Адреса</h4>
          <ul className={styles.flexList}>
            <li>г. Тула, ул. Пушкина, д.34, с.1</li>
            <li>г. Москва, ул. Колотушкина, д.56, с.2</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
