import classNames from "classnames";
import { Link } from "react-router-dom";
import Rating from "@/shared/ui/Rating";
import { useContext } from "react";
import { ProductCardContext } from "../../model/context/ProductCardContext/ProductCardContext";
import Loading from "@/shared/ui/Loading";
import styles from "./ProductInfo.module.scss";
import { useLocationController } from "@/shared/lib/hooks/useLocationController";

const ProductInfo = () => {
  const { id, title, specifications, score, reviews, mode, isTablet } =
    useContext(ProductCardContext);

  const { isOnCartPage } = useLocationController();

  if (!specifications || !reviews) {
    return <Loading />;
  }

  const fiteredSpecs = isTablet ? specifications.slice(0, 3) : specifications;

  const TitleComponent =
    mode === "large" ? (
      <h1 className={styles.title}>{title}</h1>
    ) : (
      <Link className={styles.link} to={`/store/${id}`}>
        {title}
      </Link>
    );

  return (
    <div className={classNames(styles.info, styles[mode])}>
      {TitleComponent}

      {!isOnCartPage && <Rating score={score} mode={mode} reviews={reviews} />}
      {mode !== "small" && (
        <ul className={styles.specifications}>
          {fiteredSpecs.map((spec) => (
            <li
              className={styles.specification}
              key={`${spec.title}-${spec.value}`}
            >
              <span>{`${spec.title}:`}</span>
              <span>{spec.value}</span>
            </li>
          ))}
        </ul>
      )}
      {mode === "large" && (
        <a className={styles.showMoreLink} href="#description">
          Подробнее
        </a>
      )}
    </div>
  );
};

export default ProductInfo;
