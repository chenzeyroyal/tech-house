import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";
import classNames from "classnames";
import { useCategories } from "@/entities/product/model/hooks/useCategories";
import { useContext } from "react";
import { ProductsContext } from "@/entities/product/model/context/ProductsContext/ProductsContext";
import { useLocationController } from "@/shared/lib/hooks/useLocationController";

const Breadcrumbs = () => {
  const { pathname } = useLocationController();
  const { categories } = useCategories();
  const { products } = useContext(ProductsContext);

  const categoriesBreadcrumbs = categories.reduce((acc, category) => {
    acc[`/categories/${category.id}`] = category.title;
    return acc;
  }, {});

  const productsBreadcrumbs = products.reduce((acc, product) => {
    acc[`/store/${product.id}`] = product.title;
    return acc;
  }, {});

  const breadcrumbNameMap = {
    "/store": "Магазин",
    "/cart": "Корзина",
    "/categories": "Категории",
    "/search-result": "Результаты поиска",
    "/favorites": "Избранное",
    "/login": "Вход в аккаунт",
    "/register": "Регистрация на сайте",
    ...categoriesBreadcrumbs,
    ...productsBreadcrumbs,
  };

  const pathSnippets = pathname.split("/").filter((i) => i);
  const breadcrumbItems = [
    {
      title: (
        <Link className={styles.link} to="/">
          Главная
        </Link>
      ),
      key: "home",
    },
    ...pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      const isLast = index === pathSnippets.length - 1;

      return {
        title: isLast ? (
          <span>{breadcrumbNameMap[url]}</span>
        ) : (
          <Link className={styles.link} to={url}>
            {breadcrumbNameMap[url]}
          </Link>
        ),
        key: url,
      };
    }),
  ];

  return (
    <div className={classNames(styles.breadcrumbs, "container")}>
      <ul className={styles.list}>
        {breadcrumbItems.map(({ title, key }) => (
          <li className={styles.item} key={key}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
