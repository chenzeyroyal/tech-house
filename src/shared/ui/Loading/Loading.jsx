import Icon from "../Icon";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <Icon className={styles.icon} name="load" width={50} height={50} />
    </div>
  );
};

export default Loading;
