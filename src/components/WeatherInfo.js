import React from 'react';

import { useWeatherContext } from 'WeatherContext';

import WeatherRow from 'components/WeatherRow';

const WeatherInfo = () => {
  const { weatherData, error } = useWeatherContext();

  let content = null;

  if (weatherData) {
    const {
      city, country, temperature, humidity, description,
    } = weatherData;

    content = (
      <>
        <WeatherRow property="Location" value={city && country ? `${city}, ${country}` : null} />
        <WeatherRow property="Temperature" value={temperature} />
        <WeatherRow property="Humidity" value={humidity} />
        <WeatherRow property="Conditions" value={description} />
      </>
    );
  }

  return (
    <div className="weather__info">
      {content}
      {error && <p className="weather__error">{error}</p>}
    </div>
  );
};

export default WeatherInfo;
