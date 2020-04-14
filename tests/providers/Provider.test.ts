import {Provider} from "../../src/modules/providers/Provider";
import {ContainerConfig} from "../../src/modules/configs/ContainerConfig";
import {Container} from "../../src/modules/containers/Container";

test('provider', () => {
  console.log('test start.');
  const container = Container;
  console.log(container);
  // console.log(ContainerConfig.container);
  // const provider = new Provider(ContainerConfig.container);
  // const itemTranslator = provider.pick('driver/cookie');
  // console.log(itemTranslator);
});