import React from 'react';
import propTypes from 'prop-types';

const Input = ({
  type, name, placeholder, required,
}) => (
  <input required={required} className="input" type={type} name={name} placeholder={placeholder} />
);

export default Input;

Input.defaultProps = {
  placeholder: '',
  required: true,
};

Input.propTypes = {
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  required: propTypes.bool,
};
