import logger from 'logger';

import { REACT_APP_OPENWEATHERMAP_API_KEY, API_URL, statusMessages } from '../../config';

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
    // TODO: split the queryparams in an object
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
