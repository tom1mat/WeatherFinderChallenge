/* eslint-disable import/prefer-default-export */
import logger from 'logger';

// I did not use a hook for having the hability of using outside React.
export const storage = (type, key, initialValue = null) => {
  if (!['localStorage', 'sessionStorage'].includes(type)) {
    throw Error('The type must be localStorage or sessionStorage');
  }
  const myStorage = window[type];

  const getValue = () => {
    try {
      const item = myStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      logger.error(`Error getting key ${key}`, error);
      return initialValue;
    }
  };

  const setValue = (value) => {
    try {
      myStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      logger.error(`Error setting key ${key}`, error);
    }
  };

  return [getValue(), setValue];
};
