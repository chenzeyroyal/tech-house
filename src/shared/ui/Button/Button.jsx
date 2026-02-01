import Icon from "../Icon";

import classNames from "classnames";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import { memo } from "react";

const Button = (props) => {
  const {
    className = "",
    label,
    to,
    ref,
    disabled,
    type = "button",
    mode = "plate",
    icon,
    isLabelHidden,
    isAccent,
    hasFillIcon = false,
    onClick,
  } = props;

  const isLink = to !== undefined;
  const Component = isLink ? Link : "button";
  const title = isLabelHidden ? label : undefined;
  const btnProps = { type };
  const linkProps = { to };
  const specificProps = isLink ? linkProps : btnProps;

  return (
    <Component
      className={classNames(
        className,
        styles.button,
        styles[mode],
        isAccent && styles.isAccent
      )}
      to={to}
      disabled={disabled}
      ref={ref}
      title={title}
      aria-label={title}
      onClick={onClick}
      {...specificProps}
    >
      {icon && (
        <Icon name={icon} fill={hasFillIcon ? "currentColor" : "none"} />
      )}

      {!isLabelHidden && <span>{label}</span>}
    </Component>
  );
};

export default memo(Button);
