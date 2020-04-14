import {LogRepositoryInterface} from "./LogRepositoryInterface";
import {LogLevel, LogLevelGroup} from "../../configs/LogConfig";

export class ConsoleLogRepository implements LogRepositoryInterface {

  private createStyle(logLevel: LogLevel) {
    switch(logLevel.group) {
      case LogLevelGroup.Debug:
        return 'color: gray';
      case LogLevelGroup.Info:
        return 'color: aqua';
      case LogLevelGroup.Error:
        return 'color: red';
      default:
        return null
    }
  }

  public create(logLevel: LogLevel, ...messages: any[]) {
    // * format
    // [18:45:00] Error (fatal) res: {asdf: 1}
    // [18:45:00] Info  (warn)  res: {asdf: 1}
    const now = new Date();
    const time =
      ('0' + now.getHours().toString()).slice(-2) + ':' +
      ('0' + now.getMinutes().toString()).slice(-2) + ':' +
      ('0' + now.getSeconds().toString()).slice(-2);
    const group = (logLevel.group + '       ').slice(0, 5);
    const name = '(' + (logLevel.name + ')      ').slice(0, 10);
    const head = `%c[${time}] ${group} ${name}`;
    console.log(head,this.createStyle(logLevel), ...messages );
  }
}