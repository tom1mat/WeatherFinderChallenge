import { get } from 'services/weather';
import mapper from 'services/weather/mapper';

import mockWeatherResponse from 'tests/unit/mocks/mockWeatherResponse.json';
import { statusMessages } from 'config';

describe('Weather service', () => {
  const originalFetch = window.fetch;
  jest.spyOn(window, 'fetch');

  beforeAll(() => {
    window.fetch.mockReset();
  });

  afterAll(() => {
    window.fetch = originalFetch;
  });

  describe('If the service returns the data with a success status', () => {
    test('Should return the mapped response', async () => {
      fetch.mockImplementationOnce(() => Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockWeatherResponse),
      }));
      const { data, error } = await get('Madrid', 'es');

      expect(data).toEqual(mapper(mockWeatherResponse));
      expect(error).toBe(null);
    });
  });

  describe('If the service returns a non success status', () => {
    describe('If the status is mapped', () => {
      test('Should return the expected error message', () => {
        Object.keys(status => {
          fetch.mockImplementationOnce(() => Promise.resolve({
            ok: false,
            status,
          }));
          get('Madrid', 'es').then(({ data, error }) => {
            expect(data).toBe(null);
            expect(error).toBe(statusMessages[status]);
          });
        });
      });
    });

    describe('If the status is not mapped', () => {
      test('Should return the default error message', () => {
        fetch.mockImplementationOnce(() => Promise.resolve({
          ok: false,
          status: 503,
        }));

        get('Madrid', 'es').then(({ data, error }) => {
          expect(data).toBe(null);
          expect(error).toBe('Sorry, an unknown error happened :(');
        });
      });
    });
  });

  describe('If an unexpected error happens', () => {
    test('Should be catched in the catch block, be logged, and return custom error msg', () => {
      fetch.mockImplementationOnce(() => Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({ foo: 'this will fail' }),
      }));

      get('Madrid', 'es').then(({ data, error }) => {
        expect(data).toBe(null);
        expect(error).toBe('Internal error, if it persists please contact the system administrator');
      });
    });
  });
});
