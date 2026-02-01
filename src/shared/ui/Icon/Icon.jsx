import classNames from "classnames";

const Icon = (props) => {
  const {
    className,
    name,
    width = 25,
    height = 25,
    fill = "none",
    stroke = "currentColor",
  } = props;

  return (
    <svg
      className={classNames(className)}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      aria-hidden="true"
    >
      <use href={`#icon-${name}`} />
    </svg>
  );
};

export default Icon;
