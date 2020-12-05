import { useState } from 'react';

import { useWeatherContext } from 'WeatherContext';
import { get as getWeather } from 'services/weather';
import { storage } from 'utils';

const [, setLastSearch] = storage('localStorage', 'lastSearch', null);

const useWeatherService = () => {
  const [loading, setLoading] = useState(false);
  const { setWeatherData, setError } = useWeatherContext();

  const fetchWeather = (city, country) => {
    setLoading(true);
    setError(null);
    getWeather(city, country).then(({ data, error: _error }) => {
      setLoading(false);
      setError(_error);
      setWeatherData(data);
      setLastSearch(data);
    });
  };

  return {
    loading,
    fetchWeather,
  };
};

export default useWeatherService;
