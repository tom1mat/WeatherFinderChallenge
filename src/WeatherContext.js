/* eslint-disable */
import React, { createContext, useMemo, useContext, useState } from 'react';

const Context = createContext({ weatherData: null, setWeatherData: () => { } });

export const useWeatherContext = () => useContext(Context);

const WeatherContext = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <Context.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </Context.Provider>
  );
};

export default WeatherContext;
