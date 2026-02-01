import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const isQueryEmpty = searchQuery.trim().length === 0;

  const submitSearch = (e) => {
    e.preventDefault();

    if (isQueryEmpty) return;

    const params = buildSearchParams();

    navigate(`/search-result?${params.toString()}`);
  };

  const buildSearchParams = () => {
    const params = new URLSearchParams();
    params.set("search", searchQuery);
    return params;
  };

  return {
    searchQuery,
    setSearchQuery,
    submitSearch,
    isQueryEmpty,
  };
};
