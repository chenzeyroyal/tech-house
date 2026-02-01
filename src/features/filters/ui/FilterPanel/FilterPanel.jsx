import Button from "@/shared/ui/Button";
import CheckboxFilter from "../CheckboxFilter";
import SwitchFilter from "../SwitchFilter";
import AppliedFilters from "../AppliedFilters";
import RangeFilter from "../RangeFilter";
import { useFiltersState } from "../../model/hooks/useFiltersState";
import { useFiltersParams } from "../../model/hooks/useFiltersParams";
import { useMobilePanel } from "../../model/hooks/useMobilePanel";
import classNames from "classnames";
import styles from "./FilterPanel.module.scss";
import { useFiltersUpdate } from "../../model/hooks/useFiltersUpdate";
import { useLocationController } from "@/shared/lib/hooks/useLocationController";

const FilterPanel = (props) => {
  const { products } = props;

  const { isOnCategoryPage } = useLocationController();

  const { filters } = useFiltersState(products);
  const { resetFilters, resetSelectedFilter } = useFiltersParams();
  const { toggleCheckbox, toggleSwitch, toggleMinPrice, toggleMaxPrice } =
    useFiltersUpdate(filters);

  const { isOpen, setIsOpen } = useMobilePanel();

  const handleSubmitButtonClick = () => {
    setIsOpen(false);
  };

  const handleCancelButtonClick = () => {
    resetFilters();
    setIsOpen(false);
  };

  const isFiltersEmpty = Object.values(filters).every(
    (filter) => filter.length === 0
  );

  return (
    <>
      <div className={classNames(styles.tabletBar, "visible-tablet")}>
        <Button
          className={styles.showButton}
          label="Фильтры"
          isAccent
          onClick={() => setIsOpen(!isOpen)}
        />
        {!isFiltersEmpty && (
          <AppliedFilters filters={filters} onReset={resetSelectedFilter} />
        )}
      </div>

      <aside className={classNames(styles.filters, isOpen && styles.isOpen)}>
        <Button
          className={classNames(styles.closeButton, "visible-tablet")}
          icon="x"
          label="Закрыть фильтры"
          isLabelHidden
          onClick={() => setIsOpen(false)}
        />
        <div className={styles.body}>
          {!isOnCategoryPage && (
            <CheckboxFilter
              field="categories"
              filters={filters}
              onChange={toggleCheckbox}
            />
          )}
          <CheckboxFilter
            field="brands"
            filters={filters}
            onChange={toggleCheckbox}
          />
          <RangeFilter
            products={products}
            onMinChange={toggleMinPrice}
            onMaxChange={toggleMaxPrice}
          />
          <SwitchFilter
            field={"stock"}
            filters={filters}
            onChange={toggleSwitch}
          />
        </div>

        {!isFiltersEmpty && (
          <Button
            className={classNames(styles.clearButton, "hidden-tablet")}
            label="Очистить фильтры"
            onClick={resetFilters}
            isAccent
          />
        )}

        <div className={classNames(styles.buttons, "visible-tablet")}>
          <Button
            label="Принять фильтры"
            isAccent
            onClick={handleSubmitButtonClick}
          />
          {!isFiltersEmpty && (
            <Button
              className={classNames(styles.clearButton)}
              label="Очистить фильтры"
              onClick={handleCancelButtonClick}
            />
          )}
        </div>
      </aside>
    </>
  );
};

export default FilterPanel;
