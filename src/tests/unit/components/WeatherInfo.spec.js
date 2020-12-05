/* eslint-disable import/first */
import React from 'react';
import { render } from '@testing-library/react';

const mockedData = {
  city: 'testCity',
  country: 'testCountry',
  temperature: 'testTemperature',
  humidity: 'testHumidity',
  description: 'testDescription',
};

jest.mock('WeatherContext', () => ({ useWeatherContext: () => ({ weatherData: mockedData, error: 'Error message' }) }));

import WeatherInfo from 'components/WeatherInfo';

describe('WeatherInfo component', () => {
  describe('When the context has the weatherData or an error in the state', () => {
    test('Should be displayed in the UI', async () => {
      const { getByText } = render(<WeatherInfo />);

      getByText('testCity, testCountry');
      getByText('testTemperature');
      getByText('testHumidity');
      getByText('testDescription');
      getByText('Error message');
    });
  });
});
