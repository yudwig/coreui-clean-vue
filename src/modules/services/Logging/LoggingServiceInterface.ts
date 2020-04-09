export interface LoggingServiceInterface {
  debug(...messages: any[]);
  notice(...messages: any[]);
  info(...messages: any[]);
  warn(...messages: any[]);
  error(...messages: any[]);
  fatal(...messages: any[]);
  critical(...messages: any[]);
  emergency(...messages: any[]);
}