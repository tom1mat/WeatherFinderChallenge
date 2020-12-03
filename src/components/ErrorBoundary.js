import React from 'react';
import propTypes from 'prop-types';

import logger from 'logger';

// I'm sorry but the ErrorBoundary feature is not developed as hook yet :(
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logger.error('Unknown frontend error', JSON.stringify({ error, errorInfo }));
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div className="error">Ups... an unexpected error happened</div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: propTypes.element.isRequired,
};
