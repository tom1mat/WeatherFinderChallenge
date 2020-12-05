import logger from 'logger';

import { REACT_APP_OPENWEATHERMAP_API_KEY, urls, statusMessages } from '../../config';

import mapper from './mapper';

// eslint-disable-next-line import/prefer-default-export
export const get = async (city, country) => {
  if (!city || !country) {
    return {
      data: null,
      error: `Missing required params: ${!city ? '"city"' : ''} ${!country ? ', "country"' : ''}`,
    };
  }

  try {
    const params = new URLSearchParams({
      appid: REACT_APP_OPENWEATHERMAP_API_KEY,
      units: 'metric',
      q: `${city},${country}`,
    });

    const response = await fetch(`${urls.GET_WEATHER}?${params.toString()}`);

    if (response.ok) {
      const data = mapper(await response.json());

      return {
        data,
        error: null,
      };
    }

    const statusMessage = statusMessages[response.status] || 'Sorry, an unknown error happened :(';

    return {
      data: null,
      error: statusMessage,
    };
  } catch (error) {
    logger.error('Error in getWeather', error.message);

    return {
      data: null,
      error: 'Internal error, if it persists please contact the system administrator',
    };
  }
};
