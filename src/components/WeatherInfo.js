import React from 'react';

import { useWeatherContext } from 'WeatherContext';

import WeatherRow from 'components/WeatherRow';

const WeatherInfo = () => {
  const { weatherData } = useWeatherContext();

  if (!weatherData) return null;

  const {
    city, country, temperature, humidity, description,
  } = weatherData;

  return (
    <div className="weather__info">
      <WeatherRow property="Location" value={city && country ? `${city}, ${country}` : null} />
      <WeatherRow property="Temperature" value={temperature} />
      <WeatherRow property="Humidity" value={humidity} />
      <WeatherRow property="Conditions" value={description} />
    </div>
  );
};

export default WeatherInfo;
