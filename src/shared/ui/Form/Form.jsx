import styles from "./Form.module.scss";

const Form = (props) => {
  const { children, title, error, onSubmit } = props;

  return (
    <form id="user-form" className={styles.form} onSubmit={onSubmit}>
      <legend className={styles.title}>{title}</legend>
      <span className={styles.error}>{error}</span>
      {children}
    </form>
  );
};

export default Form;
