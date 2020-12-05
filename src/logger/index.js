/* eslint-disable no-console */
import { LOGS_OFF } from 'config';

export default {
  info: (title, message) => {
    if (!LOGS_OFF) console.log(title, message);
  },
  error: (title, message) => {
    if (!LOGS_OFF) console.error(title, message);
  },
};
