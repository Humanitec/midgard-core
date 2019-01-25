import LOG_LEVELS from './LogLevels';

/**
 * Checks if the value passed as an argument is a valid log level as defined in ./LogLevels
 * @param {string} logLevel the logLevel string to be validated
 * @returns {boolean} true if the logLevel is valid, false otherwise
 */
const logLevelIsValid = (logLevel) => {
  return !!LOG_LEVELS[logLevel];
};

/**
 * 
 * @export
 * @class LogEntry Data model for representing a log entry to be sent to the server
 */
export default class LogEntry {
  /**
   *Creates an instance of LogEntry.
   * @param {string} message The message to send to the server
   * @param {LogLevel} [logLevel=LOG_LEVELS.LOG] A log level to associate the message with
   * @memberof LogEntry
   */
  constructor(message, logLevel = LOG_LEVELS.LOG) {
    this.message = message;
    if (!logLevelIsValid(logLevel)) {
      console.warn(`Invalid log level ${logLevel}. Defaulting to LOG_LEVELS.LOG`);
      logLevel = LOG_LEVELS.LOG;
    }
    this.logLevel = logLevel;
    this.timestamp = Date.now();
  }
}
