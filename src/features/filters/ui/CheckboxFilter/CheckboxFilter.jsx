import styles from "./CheckboxFilter.module.scss";
import Checkbox from "@/shared/ui/Checkbox";
import { useFilterConfig } from "../../model/hooks/useFiltersConfig";

const CheckboxFilter = (props) => {
  const config = useFilterConfig();
  const { field, filters, onChange } = props;

  const items = config[field].items;

  if (!config[field]) {
    console.warn("Undefined filter");
    return;
  }

  return (
    <div className={styles.checkboxFilter}>
      <h4>{config[field].title}</h4>
      <ul className={styles.list}>
        {items.map(({ id, title }) => (
          <li key={id}>
            <Checkbox
              id={`${field}-${id}`}
              label={title}
              type="checkbox"
              value={title}
              checked={filters[field].includes(id)}
              onChange={() => onChange(id, field)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxFilter;
