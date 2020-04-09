import {LoggingServiceInterface} from "./LoggingServiceInterface";
import {LogRepositoryInterface} from "../../repositories/Log/LogRepositoryInterface";
import {ConsoleLogRepository} from "../../repositories/Log/ConsoleLogRepository";
import {LogConfig, LogLevel} from "../../configs/LogConfig";

export class LoggingService implements LoggingServiceInterface {

  private logRepository: LogRepositoryInterface;

  constructor() {
    this.logRepository = new ConsoleLogRepository();
  }

  private write(logLevel: LogLevel, ...messages: any[]) {
    this.logRepository.create(logLevel, ...messages);
  }

  public debug(...messages: any[]) {
    this.write(LogConfig.Levels.debug, messages);
  }

  public info(...messages: any[]) {
    this.write(LogConfig.Levels.info, messages);
  }

  public notice(...messages: any[]) {
    this.write(LogConfig.Levels.notice, messages);
  }

  public warn(...messages: any[]) {
    this.write(LogConfig.Levels.warn, messages);
  }

  public error(...messages: any[]) {
    this.write(LogConfig.Levels.error, messages);
  }

  public critical(...messages: any[]) {
    this.write(LogConfig.Levels.critical, messages);
  }

  public fatal(...messages: any[]) {
    this.write(LogConfig.Levels.fatal, messages);
  }

  public emergency(...messages: any[]) {
    this.write(LogConfig.Levels.emergency, messages);
  }
}