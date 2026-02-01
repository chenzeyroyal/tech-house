import Icon from "../Icon";
import Button from "../Button";
import styles from "./NotFound.module.scss";

const NotFound = (props) => {
  const { title, subtitle, buttonLabel, to, icon } = props;
  return (
    <div className={styles.notFound}>
      <Icon name={icon} width={75} height={75} />
      <h3>{title}</h3>
      <p>{subtitle}</p>
      {buttonLabel && <Button label={buttonLabel} to={to} isAccent />}
    </div>
  );
};

export default NotFound;
