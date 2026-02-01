import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link className={styles.logo} to="/">
      <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Логотип сайта" />
    </Link>
  );
};

export default Logo;
