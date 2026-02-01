import { useFilterConfig } from "../../model/hooks/useFiltersConfig";
import Icon from "@/shared/ui/Icon";

import styles from "./AppliedFilters.module.scss";

const AppliedFilters = (props) => {
  const { filters, onReset } = props;
  const filterConfig = useFilterConfig();

  const getFilterLabel = (filterKey, filterValue) => {
    const config = filterConfig[filterKey];
    if (!config) return filterValue;

    if (config.items) {
      const item = config.items.find((item) => item.id === filterValue);
      return item?.title || filterValue;
    }

    if (filterKey === "stock") {
      return "Только в наличии";
    }

    return filterValue;
  };

  const hasActiveFilters = Object.values(filters).some(
    (filterValues) => filterValues.length > 0
  );

  if (!hasActiveFilters) {
    return null;
  }

  return (
    <ul className={styles.appliedFilters}>
      {Object.entries(filters).map(([filterKey, filterValues]) => {
        if (!filterValues.length) return null;

        return filterValues.map((value) => (
          <li
            key={value}
            className={styles.appliedItem}
            onClick={() => onReset(filterKey, value)}
          >
            {getFilterLabel(filterKey, value)}
            <Icon name="x" width={15} height={15} />
          </li>
        ));
      })}
    </ul>
  );
};

export default AppliedFilters;
