/* eslint-disable */
import React, { createContext, useContext, useState } from 'react';

import { storage } from 'utils';

const [lastSearch] = storage('localStorage', 'lastSearch', null);

const Context = createContext({ weatherData: lastSearch, setWeatherData: () => { } });

export const useWeatherContext = () => useContext(Context);

const WeatherContext = ({ children }) => {
  const [weatherData, setWeatherData] = useState(lastSearch);

  return (
    <Context.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </Context.Provider>
  );
};

export default WeatherContext;
