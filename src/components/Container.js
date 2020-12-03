import React from 'react';
import propTypes from 'prop-types';

const Container = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

export default Container;

Container.defaultProps = {
  className: '',
};

Container.propTypes = {
  children: propTypes.element.isRequired,
  className: propTypes.string,
};
