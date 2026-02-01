import { useFilterConfig } from "./useFiltersConfig";
import { useFiltersParams } from "./useFiltersParams";
import { useMemo } from "react";

export const useFiltersState = (products = []) => {
  const config = useFilterConfig();
  const { searchParams } = useFiltersParams();

  const filters = useMemo(() => {
    return Object.keys(config).reduce((acc, key) => {
      const paramValue = searchParams.get(key);

      acc[key] = paramValue ? paramValue.split(",").filter(Boolean) : [];

      return acc;
    }, {});
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    if (!products.length) return [];

    return products.filter((product) =>
      Object.entries(filters).every(([filterKey, filterValues]) => {
        if (!filterValues?.length) return true;

        return config[filterKey]?.matcher?.(product, filterValues) ?? true;
      })
    );
  }, [filters, config, products]);

  return { filters, filteredProducts };
};
