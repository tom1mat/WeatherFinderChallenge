/* eslint-disable */
import React, { createContext, useContext, useState } from 'react';

import { storage } from 'utils';

const [lastSearch] = storage('localStorage', 'lastSearch', null);

const Context = createContext({
  weatherData: lastSearch,
  setWeatherData: () => { },
  error: null,
  setError: () => { },
});

export const useWeatherContext = () => useContext(Context);

const WeatherContext = ({ children }) => {
  const [weatherData, setWeatherData] = useState(lastSearch);
  const [error, setError] = useState(null);

  return (
    <Context.Provider value={{ weatherData, setWeatherData, error, setError }}>
      {children}
    </Context.Provider>
  );
};

export default WeatherContext;
