import { request } from '../http/main';

const baseAPIURL = 'https://foo';
const loggingModuleURL = 'bar';

/**
* @param {Object} logEntry a LogEntry class instance
* @param {string} APIURL an alternate API URL to send the log entry to
*/
export default (logEntry, APIURL) => {
  const url = APIURL || `${baseAPIURL}/${loggingModuleURL}/`;
  const options = {
    method: 'POST',
    data: logEntry
  };
  request(url, options)
    .catch((e) => {
      console.log(`Failed to send logEntry to server: ${e.message}`);
    });
};
