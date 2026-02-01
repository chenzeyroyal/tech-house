import ProductCard from "@/features/product-card/ui";
import Section from "@/shared/ui/Section/Section";
import { useContext } from "react";
import { ProductsContext } from "@/entities/product/model/context/ProductsContext/ProductsContext";
import Loading from "@/shared/ui/Loading";
import classNames from "classnames";

import styles from "./ProductDetails.module.scss";

const ProductDetails = (props) => {
  const { productID } = props;

  const { products } = useContext(ProductsContext);

  const isProductsEmpty = products.length === 0;

  const product = products?.find(({ id }) => id === productID);

  return (
    <Section className={classNames(styles.productDetails, "container")}>
      {isProductsEmpty ? <Loading /> : <ProductCard {...product} />}
    </Section>
  );
};

export default ProductDetails;
