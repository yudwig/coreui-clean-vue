import {ModuleSupportInterface} from "./ModuleSupportInterface";
import {LoggingServiceInterface} from "../services/Logging/LoggingServiceInterface";

export class ModuleSupport implements ModuleSupportInterface {

  private loggingService: LoggingServiceInterface;

  constructor(modules: {
    loggingService: LoggingServiceInterface
  }) {
    Object.assign(this, modules);
  }

  debug(...messages: any[]) {
    this.loggingService.debug(...messages);
  }

  error(...messages: any[]) {
    this.loggingService.error(...messages);
  }

  warn(...messages: any[]) {
    this.loggingService.warn(...messages);
  }
}