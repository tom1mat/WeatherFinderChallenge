import React from 'react';
import cls from 'classnames';
import propTypes from 'prop-types';

const Button = ({ loading, text }) => (
  <button
    className={cls('button', { loading: 'button--disabled' })}
    disabled={loading}
  >
    {text}
  </button>
);

export default Button;

Button.defaultProps = {
  loading: false,
  text: '',
};

Button.propTypes = {
  loading: propTypes.bool,
  text: propTypes.string,
};
