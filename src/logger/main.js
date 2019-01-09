import { request } from '../http/main';
import LogEntry from './LogEntry';
import LOG_LEVELS from './LogLevels';

const makeRequest = (logEntry, APIURL) => {
  const url = APIURL || `${this.baseAPIURL}/${this.loggingModuleURL}/`;
  const options = {
    method: 'POST',
    data: logEntry
  };
  request(url, options)
    .catch((e) => {
      console.log(`Failed to send logEntry to server: ${e.message}`);
    });
};
export default class Logger {
  constructor(options = {}) {
    this.logToServer = 'logToServer' in options ? options.logToServer : true;
    this.logToConsole = 'logToConsole' in options ? options.logToConsole : true;
  }

  get logLevels() {
    return LOG_LEVELS;
  }

  log(what, level = LOG_LEVELS.LOG) {
    const logEntry = new LogEntry(what, level);
    if (this.logToServer) {
      makeRequest(logEntry);
    }
    if (this.logToConsole) {
      const method = console[level.toLowerCase()] || console.log;
      method.apply(console, [what]);
    }
  }
}
