import { renderHook, act } from '@testing-library/react-hooks';

import useWeatherService from 'hooks/useWeatherService';
import mockGetWeatherMapped from '../mocks/mockGetWeatherMapped.json';

const mockSetWeatherData = jest.fn();
const mockSetError = jest.fn();

jest.mock('../../../WeatherContext', () => ({ useWeatherContext: () => ({ setWeatherData: mockSetWeatherData, setError: mockSetError }) }));
// jest.mock('../../../services/weather', () => ({ get: jest.fn() }));
jest.mock('../../../services/weather', () => ({ get: () => Promise.resolve({ data: mockGetWeatherMapped, error: null }) }));

// eslint-disable-next-line import/first
// import { get } from '../../../services/weather';
// get.mockReturnValue(Promise.resolve('lala'));

// jest.fn().mockReturnValue(Promise.resolve({ data: 'saarasa', error: null })

describe('useWeatherService hook', () => {
  describe('When we first instantiate the hook', () => {
    test('Should return the default values', () => {
      const { result: hookResult } = renderHook(() => useWeatherService());
      const { current: { loading, fetchWeather } } = hookResult;

      expect(loading).toBe(false);
      expect(typeof fetchWeather).toBe('function');
    });
  });

  describe('When we call the getWeather function', () => {
    test('Should return the expected data', async () => {
      const { result: hookResult } = renderHook(() => useWeatherService());
      const { current: { loading, fetchWeather } } = hookResult;

      expect(loading).toBe(false);
      expect(typeof fetchWeather).toBe('function');

      act(() => fetchWeather('Madrid', 'es'));
      await act(() => Promise.resolve());
      expect(mockSetWeatherData.mock.calls[0][0]).toEqual(mockGetWeatherMapped);
    });
  });
});
