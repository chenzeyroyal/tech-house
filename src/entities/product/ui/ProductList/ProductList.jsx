import styles from "./ProductList.module.scss";
import ProductCard from "@/features/product-card/ui/ProductCard";
import classNames from "classnames";

const ProductList = (props) => {
  const { items, layout = "row" } = props;

  return (
    <ul className={classNames(styles.list, styles[layout])}>
      {items.map((product) => (
        <li className={styles.item} key={product.id}>
          <ProductCard layout={layout} {...product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
