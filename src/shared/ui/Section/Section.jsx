import styles from "./Section.module.scss";
import classNames from "classnames";

const Section = (props) => {
  const { id, className, title, meta, actions, children, isHeaderHidden } =
    props;

  return (
    <section className={classNames(className, styles.section)} id={id}>
      {title && (
        <header
          className={classNames(styles.header, {
            ["visually-hidden"]: isHeaderHidden,
          })}
        >
          <div className={styles.description}>
            <h2 className={styles.title}>
              {title}
              {meta && <span className={styles.meta}>{meta}</span>}
            </h2>
          </div>

          {actions && <div className={styles.actions}>{actions}</div>}
        </header>
      )}

      <div className={styles.body}>{children}</div>
    </section>
  );
};

export default Section;
