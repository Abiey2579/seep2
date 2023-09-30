import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-lg" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-blue_gray-900",
    gray_700: "bg-gray-700 shadow-bs text-white-A700",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
  },
  outline: {
    blue_gray_300:
      "outline outline-[1px] outline-blue_gray-300 text-blue_gray-900",
  },
};
const sizes = { xs: "p-2", sm: "p-[11px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "gray_700",
    "blue_gray_900",
    "blue_gray_300",
  ]),
};

export { Button };
