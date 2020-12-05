import React from 'react';
import propTypes from 'prop-types';

const WeatherRow = ({ property, value }) => property && value && (
  <p className="weather__key">
    {property}:
    <span className="weather__value">
      {value}
    </span>
  </p>
);

export default WeatherRow;

WeatherRow.propTypes = {
  property: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
};
