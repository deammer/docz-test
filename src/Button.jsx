import React from "react";
import t from "prop-types";
import "./style.scss";

const Button = ({ children, type, purpose, disabled }) => (
  <button className={`button ${purpose}`} type={type} disabled={disabled}>
    {children}
  </button>
);

Button.propTypes = {
  /**
   * This is a pretty good description for this prop.
   * Button type.
   */
  type: t.oneOf(["button", "submit", "reset"]),
  purpose: t.oneOf(["primary", "secondary", "danger"]),
  disabled: t.bool
};

Button.defaultProps = {
  type: "button",
  purpose: "primary",
  disabled: false
};
export default Button;
