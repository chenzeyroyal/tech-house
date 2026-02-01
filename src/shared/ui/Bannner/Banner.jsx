import classNames from "classnames";
import styles from "./Banner.module.scss";

import banner1 from "/src/shared/assets/images/banner-1.jpg";
import banner2 from "/src/shared/assets/images/banner-2.jpg";

const Banner = () => {
  return (
    <div className={classNames(styles.banner, "container")}>
      <img className={styles.image} src={banner1} />
      <img className={styles.image} src={banner2} />
    </div>
  );
};

export default Banner;
