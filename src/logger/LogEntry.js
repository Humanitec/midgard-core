export const LOG_LEVELS = {
  LOG: 'LOG',
  TRACE: 'TRACE',
  DEBUG: 'DEBUG',
  WARN: 'WARN',
  ERROR: 'ERROR'
};

export class LogEntry {
  constructor(message, logLevel = LOG_LEVELS.LOG) {
    this.message = message;
    if (!logLevelIsValid) {
      console.warn(`Invalid log level ${logLevel}. Defaulting to LOG_LEVELS.LOG`);
      logLevel = LOG_LEVELS.LOG;
    }
    this.logLevel = logLevel;
    this.timestamp = Date.now();
  }
}