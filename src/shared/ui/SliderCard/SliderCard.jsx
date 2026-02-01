import Button from "@/shared/ui/Button/Button";
import styles from "./SliderCard.module.scss";

const SliderCard = (props) => {
  const { title, subtitle, href, buttonLabel, image } = props;

  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        <Button
          className={styles.button}
          to={href}
          mode="transparent"
          label={buttonLabel}
        />
      </div>
      <img className={styles.image} src={image} alt=""/>
    </div>
  );
};

export default SliderCard;
