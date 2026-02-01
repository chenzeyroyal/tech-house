import Button from "@/shared/ui/Button/Button";
import styles from "./SliderNavigation.module.scss";
import classNames from "classnames";

const SliderNavigation = (props) => {
  const {
    navigationPrevRef,
    navigationNextRef,
    paginationRef,
    /*
    'outside' (default) || 'inside'
    */
    placement = "outside",
    isAccent = true,
    hasPagination = true,
    hasButtons = true,
  } = props;

  return (
    <div className={classNames(styles.navigation, styles[placement])}>
      {hasButtons && (
        <Button
          className={styles.button}
          icon="chevron-left"
          label="Предыдущий слайд"
          mode="circle"
          isAccent={isAccent}
          isLabelHidden
          ref={navigationPrevRef}
        />
      )}

      {hasPagination && (
        <div className={styles.pagination} ref={paginationRef} />
      )}

      {hasButtons && (
        <Button
          className={styles.button}
          icon="chevron-right"
          label="Следующий слайд"
          mode="circle"
          isAccent={isAccent}
          isLabelHidden
          ref={navigationNextRef}
        />
      )}
    </div>
  );
};

export default SliderNavigation;
