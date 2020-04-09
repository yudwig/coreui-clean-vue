import {ConsoleLogRepository} from "../../src/modules/repositories/Log/ConsoleLogRepository";
import {LogConfig} from "../../src/modules/configs/LogConfig";
const repository = new ConsoleLogRepository();

test('test', () => {
  Object.keys(LogConfig.Levels).forEach(name => {
    repository.create(LogConfig.Levels[name], "asdf", "qwer", this);
  });
});

