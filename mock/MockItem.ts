import {Item} from "../src/modules/entities/Item";
import {ItemGatewayInterface} from "../src/modules/gateways/Item/ItemGatewayInterface";
import {ItemFactoryInterface} from "../src/modules/factories/Item/ItemFactoryInterface";
import {ItemGateway} from "../src/modules/gateways/Item/ItemGateway";
import {ItemFactory} from "../src/modules/factories/Item/ItemFactory";
import {ConsoleLogRepository} from "../src/modules/repositories/Log/ConsoleLogRepository";
import {LoggingService} from "../src/modules/services/Logging/LoggingService";
import {UrlTranslator} from "../src/modules/translators/Url/UrlTranslator";
import {UrlGateway} from "../src/modules/gateways/Url/UrlGateway";
import {UrlFactory} from "../src/modules/factories/Url/UrlFactory";
import {ModuleSupport} from "../src/modules/supports/ModuleSupport";

export class MockItem {

  readonly dbData = {
    id: '1',
    title: 'A City Park',
    imageUrl: 'http://localhost:3000/images/1968.88 - A City Park.jpeg',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet mattis erat, feugiat accumsan tellus volutpat a. Quisque dapibus tincidunt ipsum, at placerat nisi efficitur nec. Nulla nisi ipsum, rutrum et nunc id, viverra eleifend enim. Curabitur nisi odio, ullamcorper id interdum eget, venenatis nec lacus. Nulla non egestas purus, et blandit dui. Vestibulum ullamcorper scelerisque sapien, id iaculis nibh blandit at. Aenean vel nunc hendrerit, finibus tellus in, tempor ex.',
    updatedAt: '1579152589',
    createdAt: '1578963600'
  };

  readonly item: Item;
  readonly values;
  private gateway: ItemGatewayInterface;
  private factory: ItemFactoryInterface;

  constructor() {
    const logRepository = new ConsoleLogRepository();
    const loggingService = new LoggingService({logRepository: logRepository});
    this.gateway = new ItemGateway({
      urlTranslator: new UrlTranslator({
        gateway: new UrlGateway(),
        factory: new UrlFactory(),
      }),
      support: new ModuleSupport({
        loggingService: loggingService
      })
    });
    this.factory = new ItemFactory();
    this.values = this.gateway.convert(this.dbData).data;
    this.item = this.factory.create(this.values).data;
  }
}