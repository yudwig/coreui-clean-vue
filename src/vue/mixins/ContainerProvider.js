import { ContainerConfig } from "../../modules/configs/ContainerConfig";
import { Provider } from "../../modules/providers/Provider";
export default {
    name: 'ContainerProvider',
    methods: {
        getProvider: function () {
            return new Provider(ContainerConfig.container);
        }
    }
};
//# sourceMappingURL=/meta/map/src/vue/mixins/ContainerProvider.js.map