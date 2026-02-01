import { useSearchParams } from "react-router-dom";

export const useFiltersParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = (field, value) => {
    const params = new URLSearchParams(searchParams);

    value.length > 0 ? params.set(field, value) : params.delete(field);

    setSearchParams(params);
  };

  const resetFilters = () => {
    setSearchParams("");
  };

  const resetSelectedFilter = (id) => {
    const params = new URLSearchParams(searchParams);
    params.delete(id);

    setSearchParams(params);
  };

  return {
    searchParams,
    updateSearchParams,
    resetFilters,
    resetSelectedFilter,
  };
};
