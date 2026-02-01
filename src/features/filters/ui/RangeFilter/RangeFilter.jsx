import { useEffect, useState, useCallback, useMemo } from "react";
import styles from "./RangeFilter.module.scss";
import { useLocationController } from "@/shared/lib/hooks/useLocationController";

const defaultMin = 0;
const defaultMax = 999999;

const RangeFilter = (props) => {
  const { products = [], onMinChange, onMaxChange } = props;

  const prices = useMemo(
    () => products.map((product) => product.price),
    [products]
  );

  const minPrice = useMemo(
    () => (prices.length > 0 ? Math.min(...prices) : defaultMin),
    [prices]
  );
  const maxPrice = useMemo(
    () => (prices.length > 0 ? Math.max(...prices) : defaultMax),
    [prices]
  );

  const [fromValue, setFromValue] = useState(minPrice);
  const [toValue, setToValue] = useState(maxPrice);

  const { idLocation } = useLocationController();

  useEffect(() => {
    setFromValue(minPrice);
    setToValue(maxPrice);
  }, [idLocation]);

  const handleFromChange = useCallback((e) => {
    setFromValue(e.target.value);
  }, []);

  const handleToChange = useCallback((e) => {
    setToValue(e.target.value);
  }, []);

  const handleFromBlur = useCallback(
    (e) => {
      let value = Number(e.target.value);
      if (value > toValue) value = toValue;

      setFromValue(value);
      onMinChange(value);
    },
    [toValue, onMinChange]
  );

  const handleToBlur = useCallback(
    (e) => {
      let value = Number(e.target.value);
      if (value < fromValue) value = fromValue;
      setToValue(value);
      onMaxChange(value);
    },
    [fromValue, onMaxChange]
  );

  return (
    <div className={styles.rangeFilter}>
      <h4 className={styles.title}>Цена</h4>

      <div className={styles.thumbs}>
        <label htmlFor="from" className={styles.label}>
          <span>от</span>
          <input
            id="from"
            className={styles.input}
            label="От"
            type="number"
            min={minPrice}
            value={fromValue}
            aria-valuemin={minPrice}
            onChange={handleFromChange}
            onBlur={handleFromBlur}
          />
        </label>

        <label htmlFor="to" className={styles.label}>
          <span>до</span>
          <input
            id="to"
            className={styles.input}
            label="До"
            type="number"
            max={maxPrice}
            value={toValue}
            aria-valuemax={maxPrice}
            aria-orientation="horizontal"
            onChange={handleToChange}
            onBlur={handleToBlur}
          />
        </label>
      </div>
    </div>
  );
};

export default RangeFilter;
