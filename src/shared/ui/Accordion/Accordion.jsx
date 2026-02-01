import Icon from "../Icon";

import styles from "./Accordion.module.scss";

const Accordion = (props) => {
  const { title, children } = props;

  return (
    <div className={styles.accordion}>
      <details className={styles.details} open>
        <summary className={styles.header}>
          <span className={styles.title}>{title}</span>
          <Icon className={styles.icon} name="chevron-down" />
        </summary>
      </details>
      <div className={styles.content}>
        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
