import {DeleteItemUseCase} from "../usecases/ItemMenu/DeleteItem/DeleteItemUseCase";
import {OpenItemEditPageUseCase} from "../usecases/ItemMenu/OpenItemEditPage/OpenItemEditPageUseCase";
import {DeleteItemInteractor} from "../usecases/ItemMenu/DeleteItem/DeleteItemInteractor";
import {ItemGatewayInterface} from "../gateways/Item/ItemGatewayInterface";
import {ItemRepositoryInterface} from "../repositories/Item/ItemRepositoryInterface";
import {RouteRepositoryInterface} from "../repositories/Route/RouteRepositoryInterface";
import {UrlRepositoryInterface} from "../repositories/Url/UrlRepositoryInterface";
import {LoggingServiceInterface} from "../services/Logging/LoggingServiceInterface";
import {ItemMenuStateInterface} from "../states/ItemMenuStateInterface";
import {ItemGateway} from "../gateways/Item/ItemGateway";
import {MockItemRepository} from "../repositories/Item/MockItemRepository";
import {RouteRepository} from "../repositories/Route/RouteRepository";
import {UrlRepository} from "../repositories/Url/UrlRepository";
import {VueRouterUrlDriver} from "../../vue/drivers/VueRouterUrlDriver";
import {UrlTranslator} from "../translaters/Url/UrlTranslator";
import {UrlGateway} from "../gateways/Url/UrlGateway";
import {UrlFactory} from "../factories/Url/UrlFactory";
import {LoggingService} from "../services/Logging/LoggingService";
import {VuexItemMenuStateAdapter} from "../../vue/states/VuexItemMenuStateAdapter";
import {PushOpenItemEditPageInteractor} from "../usecases/ItemMenu/OpenItemEditPage/PushOpenItemEditPageInteractor";

export class ItemMenuController {

  private itemGateway: ItemGatewayInterface;
  private itemRepository: ItemRepositoryInterface;
  private routeRepository: RouteRepositoryInterface;
  private urlRepository: UrlRepositoryInterface;
  private loggingService: LoggingServiceInterface;
  private itemFormState: ItemMenuStateInterface;

  private deleteItemUseCase: DeleteItemUseCase;
  private openItemEditPageUseCase: OpenItemEditPageUseCase;

  constructor() {
    this.itemGateway = new ItemGateway();
    this.itemRepository = new MockItemRepository();
    this.routeRepository = new RouteRepository();
    this.urlRepository = new UrlRepository(
      new VueRouterUrlDriver(),
      new UrlTranslator(
        new UrlGateway(),
        new UrlFactory()
      )
    );
    this.loggingService = new LoggingService();
    this.itemFormState = new VuexItemMenuStateAdapter();

    this.deleteItemUseCase = new DeleteItemInteractor(
      this.itemGateway,
      this.itemRepository,
      this.routeRepository,
      this.urlRepository,
      this.loggingService,
      this.itemFormState
    );
    this.openItemEditPageUseCase = new PushOpenItemEditPageInteractor(
      this.routeRepository,
      this.urlRepository
    );
  }

  public deleteItem(id: string) {
    this.deleteItemUseCase.handle(id);
  }

  public openItemEditPage(id: string) {
    this.openItemEditPageUseCase.handle(id);
  }
}
