import Switch from "@/shared/ui/Switch";
import { useFilterConfig } from "../../model/hooks/useFiltersConfig";

import styles from "./SwitchFilter.module.scss";

const SwitchFilter = (props) => {
  const filterConfig = useFilterConfig();
  const { field, filters, onChange } = props;

  return (
    <div className={styles.switchFilter}>
      <span className={styles.title}>{filterConfig[field].title}</span>
      <Switch
        title={filterConfig[field].subTitle}
        checked={filters.stock?.length > 0}
        onChange={() => onChange(field)}
      />
    </div>
  );
};

export default SwitchFilter;
