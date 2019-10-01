import React from "react";
import t from "prop-types";
import "./style.scss";

const Button = ({ children, type }) => (
  <button className="button" type={type}>
    {children}
  </button>
);

Button.propTypes = {
  /**
   * This is a pretty good description for this prop.
   * Button type.
   */
  type: t.oneOf(["button", "submit", "reset"])
};
Button.defaultProps = {
  type: "button"
};
export default Button;
