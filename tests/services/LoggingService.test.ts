import {LoggingService} from "../../src/modules/services/Logging/LoggingService";

const service = new LoggingService();

test('test', () => {
  const msg1 = "val: ";
  const msg2 = 5;
  service.debug(msg1, msg2);
  service.info(msg1, msg2);
  service.notice(msg1, msg2);
  service.warn(msg1, msg2);
  service.error(msg1, msg2);
  service.critical(msg1, msg2);
  service.fatal(msg1, msg2);
  service.emergency(msg1, msg2);
});