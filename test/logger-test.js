import Logger from '../src/logger/main';
import LogEntry from '../src/logger/LogEntry'
import LogLevels from '../src/logger/LogLevels';

describe(('LogEntry'), () => {

    it('LogLevel validation works', () => {
        const logEntry = new LogEntry('test', 'INVALID_LOG_LEVEL');
        expect(logEntry.logLevel).toBe(LogLevels.LOG);
    })

    it('specified LogLevel works', () => {
        const logEntry = new LogEntry('test', LogLevels.DEBUG);
        expect(logEntry.logLevel).toBe(LogLevels.DEBUG);
    })

});

describe('Logger', () => {

  it('Should log to both console and server with default settings', () => {
    
    const logger = new Logger();
    
    spyOn(console,"log").and.callThrough();
    spyOn(logger,"makeRequest");

    expect(() => {logger.log("test")}).not.toThrow();
    expect(console.log).toHaveBeenCalledWith("test");
    expect(logger.makeRequest).toHaveBeenCalled();

  });

  it('Should log to console only with logToServer set to false', () => {
    
    const logger = new Logger({logToServer: false});
    
    spyOn(console,"log").and.callThrough();
    spyOn(logger,"makeRequest");

    expect(() => {logger.log("test")}).not.toThrow();
    expect(console.log).toHaveBeenCalledWith("test");
    expect(logger.makeRequest).not.toHaveBeenCalled();
    
  });

  it('Should log to server only with logToConsole set to false', () => {
    
    const logger = new Logger({logToConsole: false});
    
    spyOn(console,"log").and.callThrough();
    spyOn(logger,"makeRequest");

    expect(() => {logger.log("test")}).not.toThrow();
    expect(console.log).not.toHaveBeenCalledWith("test");
    expect(logger.makeRequest).toHaveBeenCalled();
    
  });
});


