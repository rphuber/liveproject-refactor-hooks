import React from "react";
import PropTypes from "prop-types";


const Select = ({ children, onChange, name, label }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select className="select" id={name} onChange={onChange}>{children}</select>
    </>
  )
};

Select.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

Select.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string
}
export default Select;
