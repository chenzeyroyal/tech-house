import getIdFromTitle from "@/shared/lib/getIdFromTitle";
import classNames from "classnames";
import styles from "./Select.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "../Icon";

const Select = (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    defaultValue,
    isLabelHidden = true,
    options = [],
    onChange,
  } = props;

  const IDs = {
    originalControl: id,
    label: `${id}-label`,
    dropdown: `${id}-dropdown`,
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    defaultValue || options[0]
  );

  const selectRef = useRef(null);

  const handleOptionSelect = useCallback((option) => {
    setSelectedOption(option);
    onChange?.(option);
    setIsExpanded(false);

    const selectedOptionIndex = options.findIndex(
      (opt) => opt.value === option.value
    );
    setFocusedOptionIndex(selectedOptionIndex);
  }, [options, onChange]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!selectRef.current || !selectRef.current.contains(e.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const [focusedOptionIndex, setFocusedOptionIndex] = useState(-1);

  const handleKeyDown = (e) => {
    if (!isExpanded) {
      switch (e.key) {
        case "Enter":
        case " ":
        case "ArrowDown":
        case "ArrowUp":
          e.preventDefault();
          setIsExpanded(true);
          setFocusedOptionIndex(
            options.findIndex((opt) => opt.value === selectedOption.value)
          );
          break;
        default:
          break;
      }
    } else {
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          setIsExpanded(false);
          setFocusedOptionIndex(-1);
          break;

        case "Tab":
          setIsExpanded(false);
          setFocusedOptionIndex(-1);
          break;

        case "Enter":
          e.preventDefault();
          if (focusedOptionIndex >= 0) {
            handleOptionSelect(options[focusedOptionIndex]);
          }
          break;

        case " ":
          e.preventDefault();
          if (focusedOptionIndex >= 0) {
            handleOptionSelect(options[focusedOptionIndex]);
          }
          break;

        case "ArrowDown":
          e.preventDefault();
          setFocusedOptionIndex((prev) =>
            prev < options.length - 1 ? prev + 1 : 0
          );
          break;

        case "ArrowUp":
          e.preventDefault();
          setFocusedOptionIndex((prev) =>
            prev > 0 ? prev - 1 : options.length - 1
          );
          break;

        case "Home":
          e.preventDefault();
          setFocusedOptionIndex(0);
          break;

        case "End":
          e.preventDefault();
          setFocusedOptionIndex(options.length - 1);
          break;
      }
    }
  };

  return (
    <div
      className={classNames(
        className,
        styles.select,
        isExpanded && styles.isExpanded
      )}
      ref={selectRef}
    >
      <label
        className={isLabelHidden && "visually-hidden"}
        id={IDs.label}
        htmlFor={IDs.originalControl}
      >
        {label}
      </label>
      <select
        className={styles.originalControl}
        id={IDs.originalControl}
        tabIndex={-1}
        value={selectedOption.value}
        onChange={(e) => {
          const selected = options.find((opt) => opt.value === e.target.value);
          if (selected) {
            handleOptionSelect(selected)
          }
        }}
      >
        {options.map(({ value, label }, index) => (
          <option key={index} value={value}>{label}</option>
        ))}
      </select>
      <div className={styles.body}>
        <div
          className={styles.button}
          role="combobox"
          aria-expanded={isExpanded}
          aria-haspopup="listbox"
          aria-controls={IDs.dropdown}
          aria-labelledby={IDs.label}
          tabIndex={0}
          onClick={() => setIsExpanded(!isExpanded)}
          onKeyDown={handleKeyDown}
        >
          <Icon className={styles.arrow} name="chevron-up" />
          <span>{selectedOption.label}</span>
        </div>
        <div
          className={styles.dropdown}
          id={IDs.dropdown}
          role="listbox"
          aria-labelledby={IDs.label}
        >
          {options.map((option, index) => {
            return (
              <div
                className={classNames(
                  styles.option,
                  focusedOptionIndex === index && styles.isFocused
                )}
                id={`${id}-option-${index}`}
                role="option"
                aria-selected={option.value === selectedOption?.value}
                key={option.value}
                onClick={() => handleOptionSelect(option)}
                onKeyDown={handleKeyDown}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Select;
