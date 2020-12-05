import React from 'react';
import cls from 'classnames';
import propTypes from 'prop-types';

const Button = ({
  disabled, loading, text, type,
}) => (
  <button
    className={cls('button', { [loading || disabled]: 'button--disabled', loading: 'button--loading' })}
    disabled={loading || disabled}
    type={type}
  >
    {loading ? 'Loading' : text}
  </button>
);

export default Button;

Button.defaultProps = {
  loading: false,
  text: '',
  type: '',
  disabled: false,
};

Button.propTypes = {
  loading: propTypes.bool,
  text: propTypes.string,
  type: propTypes.string,
  disabled: propTypes.bool,
};
