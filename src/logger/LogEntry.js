import LOG_LEVELS from './LogLevels';

const logLevelIsValid = (logLevel) => {
  return !!LOG_LEVELS[logLevel];
};
export default class LogEntry {
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
