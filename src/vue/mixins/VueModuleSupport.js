import { ModuleSupport } from "../../modules/supports/ModuleSupport";
import { LoggingService } from "../../modules/services/Logging/LoggingService";
import { ConsoleLogRepository } from "../../modules/repositories/Log/ConsoleLogRepository";
export default {
    name: 'VueModuleSupport',
    data: function () {
        return {
            _support: null
        };
    },
    methods: {
        _createSupportModule: function () {
            var repository = new ConsoleLogRepository();
            var service = new LoggingService({
                logRepository: repository
            });
            return new ModuleSupport({
                loggingService: service
            });
        },
        debug: function () {
            var _a;
            var messages = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                messages[_i] = arguments[_i];
            }
            if (!this._support) {
                this._support = this._createSupportModule();
            }
            (_a = this._support).debug.apply(_a, messages);
        },
        error: function () {
            var _a;
            var messages = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                messages[_i] = arguments[_i];
            }
            if (!this._support) {
                this._support = this._createSupportModule();
            }
            (_a = this._support).error.apply(_a, messages);
        }
    }
};
//# sourceMappingURL=/meta/map/src/vue/mixins/VueModuleSupport.js.map