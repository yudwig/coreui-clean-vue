import {LogLevel} from "../../configs/LogConfig";

export interface LogRepositoryInterface {
  create(logLevel: LogLevel, ...messages: string[]);
}