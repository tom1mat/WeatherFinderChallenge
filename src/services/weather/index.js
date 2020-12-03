import logger from 'logger';

import { REACT_APP_OPENWEATHERMAP_API_KEY, API_URL } from '../../config';

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
    const response = await fetch(
      `${API_URL}/weather?q=${city},${country}&appid=${REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`,
    );

    if (response.ok) {
      const data = mapper(await response.json());

      return {
        data,
        error: null,
      };
    }

    return {
      data: null,
      error: 'Service temporally unavailable',
    };
  } catch (error) {
    logger.error('Error in getWeather', error.message);

    return {
      data: null,
      error: 'Unknown error',
    };
  }
};
