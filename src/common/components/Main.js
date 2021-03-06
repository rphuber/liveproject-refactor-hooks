import React from "react";
import PropTypes from "prop-types";

const Main = ({ children }) => {
  return <main className="main">{children}</main>;
};

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default Main;
