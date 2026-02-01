import classNames from "classnames";
import styles from "./Field.module.scss";

const Field = (props) => {
  const {
    className,
    id,
    ref,
    label,
    name,
    pattern,
    title,
    type = "text",
    min,
    max,
    autoComplete = "on",
    placeholder,
    isRequired = false,
    onChange,
    onInput,
    onBlur,
  } = props;

  return (
    <div className={classNames(className, styles.field)}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        name={name}
        ref={ref}
        pattern={pattern}
        title={title}
        autoComplete={autoComplete}
        placeholder={placeholder}
        type={type}
        minLength={min}
        maxLength={max}
        required={isRequired}
        onInput={onInput}
        onBlur={onBlur}
        onChange={onChange}
      />
    </div>
  );
};

export default Field;
