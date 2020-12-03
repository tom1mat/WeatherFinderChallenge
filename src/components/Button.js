import React from 'react';
import cls from 'classnames';
import propTypes from 'prop-types';

const Button = ({ loading, text, type }) => (
  <button
    className={cls('button', { loading: 'button--disabled' })}
    disabled={loading}
    type={type}
  >
    {/* TODO: fix the button width for not being moved in the UI */}
    {loading ? 'Loading...' : text}
  </button>
);

export default Button;

Button.defaultProps = {
  loading: false,
  text: '',
  type: '',
};

Button.propTypes = {
  loading: propTypes.bool,
  text: propTypes.string,
  type: propTypes.string,
};
