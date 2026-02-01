import { useCallback } from "react";
import { useFiltersParams } from "./useFiltersParams";

export const useFiltersUpdate = (filters) => {
  const { updateSearchParams } = useFiltersParams();

  const toggleCheckbox = useCallback(
    (value, field) => {
      const exists = filters[field].includes(value);

      const updatedValue = exists
        ? filters[field].filter((filter) => filter !== value)
        : [...filters[field], value];

      updateSearchParams(field, updatedValue);
    },
    [filters, updateSearchParams]
  );

  const toggleSwitch = useCallback(
    (field) => {
      const isSwitchFilterEmpty = filters[field].length === 0;

      updateSearchParams(field, isSwitchFilterEmpty ? "true" : []);
    },
    [filters, updateSearchParams]
  );

  const toggleMinPrice = useCallback(
    (value) => {
      updateSearchParams("minPrice", [value]);
    },
    [updateSearchParams]
  );

  const toggleMaxPrice = useCallback(
    (value) => {
      updateSearchParams("maxPrice", [value]);
    },
    [updateSearchParams]
  );

  return {
    toggleCheckbox,
    toggleSwitch,
    toggleMinPrice,
    toggleMaxPrice,
  };
};
