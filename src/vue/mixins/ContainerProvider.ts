import {ContainerConfig} from "../../modules/configs/ContainerConfig";
import {Provider} from "../../modules/providers/Provider";

export default {
  name: 'ContainerProvider',
  methods: {
    getProvider() {
      return new Provider(ContainerConfig.container);
    }
  }
}