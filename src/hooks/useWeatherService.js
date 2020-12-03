import { useState } from 'react';

import { useWeatherContext } from 'WeatherContext';
import { get as getWeather } from 'services/weather';

const useWeatherService = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setWeatherData } = useWeatherContext();

  const fetchWeather = (city, country) => {
    setLoading(true);
    getWeather(city, country).then(({ data, error: _error }) => {
      setLoading(false);
      setError(_error);
      setWeatherData(data);
    });
  };

  return {
    loading,
    fetchWeather,
    error,
  };
};

export default useWeatherService;
