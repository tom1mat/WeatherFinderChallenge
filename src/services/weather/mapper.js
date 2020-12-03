import logger from 'logger';

export default (data) => {
  try {
    return {
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
    };
  } catch (error) {
    logger.error('Mapper error', error.message);
    return null;
  }
};
