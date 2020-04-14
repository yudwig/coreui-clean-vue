import {ModuleSupport} from "../../modules/supports/ModuleSupport";
import {LoggingService} from "../../modules/services/Logging/LoggingService";
import {ConsoleLogRepository} from "../../modules/repositories/Log/ConsoleLogRepository";

export default {
  name: 'VueModuleSupport',
  data() {
    return {
      _support: null
    }
  },
  methods: {
    _createSupportModule() {
      const repository = new ConsoleLogRepository();
      const service = new LoggingService({
        logRepository: repository
      });
      return new ModuleSupport({
        loggingService: service
      });
    },
    debug(...messages) {
      if (!this._support) {
        this._support = this._createSupportModule();
      }
      this._support.debug(...messages);
    },
    error(...messages) {
      if (!this._support) {
        this._support = this._createSupportModule();
      }
      this._support.error(...messages);
    }
  }
}