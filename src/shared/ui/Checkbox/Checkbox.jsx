import styles from "./Checkbox.module.scss";

const Checkbox = (props) => {
  const { id, label, value, checked, onChange } = props;

  return (
    <label htmlFor={id} className={styles.checkbox}>
      <input
        className={styles.input}
        id={id}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default Checkbox;
