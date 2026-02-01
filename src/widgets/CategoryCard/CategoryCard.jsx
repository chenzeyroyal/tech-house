import styles from "./CategoryCard.module.scss";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  const { id, title, image } = props;

  return (
    <Link className={styles.categoryCard} to={`/categories/${id}`}>
      <img className={styles.image} src={image} alt="" width={150} />
      <span className={styles.title}>{title}</span>
    </Link>
  );
};

export default CategoryCard;
