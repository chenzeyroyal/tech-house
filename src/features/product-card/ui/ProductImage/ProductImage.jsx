import { Link } from "react-router-dom";

import Carousel from "@/widgets/Carousel";
import { ProductCardContext } from "@/features/product-card/model/context/ProductCardContext/ProductCardContext";
import { useContext } from "react";
import classNames from "classnames";
import Loading from "@/shared/ui/Loading";

import styles from "./ProductImage.module.scss";

const ProductImage = () => {
  const { id, title, images, mode } = useContext(ProductCardContext);

  if (!images) {
    return <Loading />;
  }

  return (
    <div className={classNames(styles.imageContainer, styles[mode])}>
      {mode === "large" ? (
        <Carousel items={images} />
      ) : (
        <Link className={styles.link} to={`/store/${id}`}>
          <img className={styles.image} src={images[0]} alt={title} />
        </Link>
      )}
    </div>
  );
};

export default ProductImage;
