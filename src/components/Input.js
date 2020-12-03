import React from 'react';
import propTypes from 'prop-types';

const Input = ({ type, name, placeholder }) => (
  <input className="input" type={type} name={name} placeholder={placeholder} />
);

export default Input;

Input.defaultProps = {
  placeholder: '',
};

Input.propTypes = {
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
};
