/* eslint-disable no-console */
// TODO: adding log level?
export default {
  info: (title, message) => {
    console.log(title, message);
  },
  error: (title, message) => {
    console.error(title, message);
  },
};
