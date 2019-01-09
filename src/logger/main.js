import makeRequest from './makeRequest';
import LogEntry from './LogEntry';
import LOG_LEVELS from './LogLevels';

/**
 * Utility class providing server-side and local logging functionality
 */
export default class Logger {
  /**
   * Create an instance which will enable sending log messages to the server and/or the console
   * @param {Object} options The options for the Logger instance.
   * @param {boolean} options.logToServer Whether the Logger should send the message to a server
   * @param {boolean} options.logToConsole Whether the message should be sent to the console
   * @param {string} options.APIURL An API endpoint that the message should be sent to instead of the default
   */
  constructor(options = {}) {
    this.logToServer = 'logToServer' in options ? options.logToServer : true;
    this.logToConsole = 'logToConsole' in options ? options.logToConsole : true;
    this.APIURL = options.APIURL;
  }

  /**
   * Object containing all the valid log levels which can be used when logging messages.
   * @readonly
   * @memberof Logger
   */
  get logLevels() {
    return LOG_LEVELS;
  }

  /**
   * Log a message to the destinations configured for this class instance - either to the console, the server, or both
   * @param {string} what The message to log
   * @param {LogLevel} [level=LOG_LEVELS.LOG] The type of log to create. Valid values are enumerated in the logLevels property
   * @memberof Logger
   */
  log(what, level = LOG_LEVELS.LOG) {
    const logEntry = new LogEntry(what, level);
    if (this.logToServer) {
      let fn = this.makeRequest || makeRequest;
      fn(logEntry);
    }
    if (this.logToConsole) {
      const method = console[level.toLowerCase()] || console.log;
      method.apply(console, [what]);
    }
  }
}
