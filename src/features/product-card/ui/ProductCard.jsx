import ProductActions from "./ProductActions";
import ProductInfo from "./ProductInfo";
import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";
import { ProductCardProvider } from "../model/context/ProductCardContext/ProductCardProvider";
import { useProductCard } from "../lib/hooks/useProductCard";
import { useDevice } from "../lib/hooks/useDevice";
import classNames from "classnames";

import styles from "./ProductCard.module.scss";

const ProductCard = (props) => {
  const { id } = props;

  const { score, mode, isInStock } = useProductCard(id);
  const { isMobile, isTablet } = useDevice();

  return (
    <ProductCardProvider
      {...props}
      score={score}
      mode={mode}
      isInStock={isInStock}
      isMobile={isMobile}
      isTablet={isTablet}
    >
      <div className={classNames(styles.productCard, styles[mode])}>
        <div
          className={classNames(styles.inner, !isInStock && styles.notInStock)}
        >
          <ProductImage />
          <ProductInfo />
          <ProductActions />
        </div>
        {mode === "large" && <ProductDescription />}
        {mode === "large" && <ProductReviews />}
      </div>
    </ProductCardProvider>
  );
};

export default ProductCard;
