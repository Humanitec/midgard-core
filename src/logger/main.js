import { request } from '../http/main';
import { LOG_LEVELS, LogEntry } from './LogEntry';

class Logger {
  constructor(logToServer = true, logToConsole = true) {
    this.logToServer = logToServer;
    this.logToConsole = logToConsole;
  }

  get LOG_LEVELS() {
    return LOG_LEVELS;
  }

  log(what, level = LOG_LEVELS.LOG) {
    const logEntry = new LogEntry(what, level);
    if (this.logToServer) {
      this.makeRequest(logEntry);
    }
    if (this.logToConsole) {
      const method = console[level.toLowerCase()] || console.log;
      method.apply(console, what);
    }
  }

  makeRequest(logEntry) {
    const url = `${this.baseAPIURL}/${this.loggingModuleURL}`;
    const options = {
      method: 'POST',
      data: logEntry
    };
    request(url, options)
      .catch((e) => {
        console.log(`Failed to send logEntry to server: ${e.message}`);
      });
  }
}

export default Logger;
