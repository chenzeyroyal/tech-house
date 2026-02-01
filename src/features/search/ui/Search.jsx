import Field from "@/shared/ui/Field";
import Button from "@/shared/ui/Button";
import { useSearch } from "../model/hooks/useSearch";
import { Link } from "react-router-dom";
import { memo, useMemo, useEffect, useRef, useState, useContext } from "react";
import styles from "./Search.module.scss";
import { ProductsContext } from "@/entities/product/model/context/ProductsContext/ProductsContext";
import { useLocationController } from "@/shared/lib/hooks/useLocationController";

const MAX_VISIBLE_RESULT = 2;

const Search = () => {
  const { products } = useContext(ProductsContext);

  const { searchQuery, setSearchQuery, submitSearch, isQueryEmpty } =
    useSearch();

  const searchResult = useMemo(
    () =>
      isQueryEmpty
        ? []
        : products.filter(({ title }) =>
            title.toLowerCase().includes(searchQuery)
          ),
    [products, searchQuery, isQueryEmpty]
  );

  const displayedResult = useMemo(() => {
    return searchResult.slice(0, MAX_VISIBLE_RESULT);
  }, [searchResult]);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const shouldBeOpen = searchResult.length > 0 && searchQuery.length > 0;
    setIsOpen(shouldBeOpen);
  }, [searchResult.length, searchQuery]);

  const timerRef = useRef(null);
  const handleBlur = () => {
    timerRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  const { pathname } = useLocationController();
  const inputRef = useRef(null);

  useEffect(() => {
    setIsOpen(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    inputRef.current.value = "";
  }, [pathname]);

  return (
    <div className={styles.search}>
      <form className={styles.form} onSubmit={submitSearch}>
        <Field
          className={styles.input}
          type="search"
          ref={inputRef}
          autoComplete="off"
          id="search-products"
          placeholder="Найти товар"
          onInput={(e) => setSearchQuery(e.target.value.trim().toLowerCase())}
          onBlur={handleBlur}
        />
        <Button
          className={styles.submitButton}
          type="submit"
          label="Искать товары"
          icon="search"
          isAccent
          isLabelHidden
          disabled={isQueryEmpty}
        />
      </form>

      {isOpen && (
        <ul
          className={styles.resultList}
          role="listbox"
          aria-label="Результаты поиска"
        >
          {displayedResult.map(({ id, title, images, price }) => (
            <li className={styles.resultItme} key={id} role="option">
              <Link className={styles.resultLink} to={`/store/${id}`}>
                <img src={images[0]} width={60} />
                <span> {title}</span>
                <span>
                  {price.toLocaleString("ru-RU", {
                    style: "currency",
                    currency: "RUB",
                    minimumFractionDigits: 0,
                  })}
                </span>
              </Link>
            </li>
          ))}
          {searchResult.length > 1 && (
            <li>
              <Button
                className={styles.showMoreButton}
                label="Показать больше"
                onClick={submitSearch}
              />
            </li>
          )}
        </ul>
      )}
    </div>
  );
};
export default memo(Search);
