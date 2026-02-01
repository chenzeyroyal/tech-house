import styles from "./Switch.module.scss";

const Switch = (props) => {
  const { title, checked, onChange } = props;

  return (
    <div className={styles.container}>
      <span>{title}</span>
      <label className={styles.switch} htmlFor="switch">
        <input
          className={styles.input}
          type="checkbox"
          id="switch"
          checked={checked}
          onChange={onChange}
        />
        <span className={styles.slider}></span>
        <span className="visually-hidden">Переключатель</span>
      </label>
    </div>
  );
};

export default Switch;
