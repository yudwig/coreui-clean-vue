import {FindItemUseCase} from "../usecases/ItemDetail/FindItem/FindItemUseCase";
import {FindItemInteractor} from "../usecases/ItemDetail/FindItem/FindItemInteractor";
import {MockItemRepository} from "../repositories/Item/MockItemRepository";
import {ItemPresenterInterface} from "../presenters/ItemDetail/Item/ItemPresenterInterface";
import {ItemPresenter} from "../presenters/ItemDetail/Item/ItemPresenter";
import {ItemDetailViewStateInterface} from "../states/ItemDetailViewStateInterface";
import {VuexItemDetailViewStateAdapter} from "../../vue/states/VuexItemDetailViewStateAdapter";
import {ItemRepositoryInterface} from "../repositories/Item/ItemRepositoryInterface";
import {ItemGatewayInterface} from "../gateways/Item/ItemGatewayInterface";
import {ItemGateway} from "../gateways/Item/ItemGateway";
import {OpenItemEditPageUseCase} from "../usecases/ItemMenu/OpenItemEditPage/OpenItemEditPageUseCase";
import {RouteRepositoryInterface} from "../repositories/Route/RouteRepositoryInterface";
import {UrlRepositoryInterface} from "../repositories/Url/UrlRepositoryInterface";
import {RouteRepository} from "../repositories/Route/RouteRepository";
import {UrlRepository} from "../repositories/Url/UrlRepository";
import {VueRouterUrlDriver} from "../../vue/drivers/VueRouterUrlDriver";
import {UrlTranslator} from "../translaters/Url/UrlTranslator";
import {UrlGateway} from "../gateways/Url/UrlGateway";
import {UrlFactory} from "../factories/Url/UrlFactory";
import {DeleteItemUseCase} from "../usecases/ItemMenu/DeleteItem/DeleteItemUseCase";
import {LoggingServiceInterface} from "../services/Logging/LoggingServiceInterface";
import {ItemListViewStateInterface} from "../states/ItemListViewStateInterface";
import {ItemEditViewStateInterface} from "../states/ItemEditViewStateInterface";
import {LoggingService} from "../services/Logging/LoggingService";
import {VuexItemListViewStateAdapter} from "../../vue/states/VuexItemListViewStateAdapter";
import {VuexItemEditViewStateAdapter} from "../../vue/states/VuexItemEditViewStateAdapter";
import {OpenDeleteResultPageUseCase} from "../usecases/ItemDetail/OpenDeleteResultPage/OpenDeleteResultPageUseCase";
import {PushOpenItemEditPageInteractor} from "../usecases/ItemMenu/OpenItemEditPage/PushOpenItemEditPageInteractor";
import {PushOpenDeleteResultPageInteractor} from "../usecases/ItemDetail/OpenDeleteResultPage/PushOpenDeleteResultPageInteractor";

export class ItemDetailController {

  private itemRepository: ItemRepositoryInterface;
  private itemGateway: ItemGatewayInterface;
  private routeRepository: RouteRepositoryInterface;
  private urlRepository: UrlRepositoryInterface;
  private loggingService: LoggingServiceInterface;
  private itemListState: ItemListViewStateInterface;
  private itemEditState: ItemEditViewStateInterface;
  private itemDetailViewState: ItemDetailViewStateInterface;

  private itemPresenter: ItemPresenterInterface;
  private findItemUseCase: FindItemUseCase;
  private openDeleteResultPageUseCase: OpenDeleteResultPageUseCase;

  constructor() {
    this.itemDetailViewState = new VuexItemDetailViewStateAdapter();
    this.itemRepository = new MockItemRepository();
    this.itemGateway = new ItemGateway();
    this.routeRepository = new RouteRepository();
    this.urlRepository = new UrlRepository(
      new VueRouterUrlDriver(),
      new UrlTranslator(
        new UrlGateway(),
        new UrlFactory()
      )
    );
    this.loggingService = new LoggingService();
    this.itemListState = new VuexItemListViewStateAdapter();
    this.itemEditState = new VuexItemEditViewStateAdapter();

    this.itemPresenter = new ItemPresenter(
      this.itemDetailViewState
    );
    this.findItemUseCase = new FindItemInteractor(
      this.itemRepository,
      this.itemDetailViewState,
      this.itemGateway
    );
    this.openDeleteResultPageUseCase = new PushOpenDeleteResultPageInteractor(
      this.urlRepository,
      this.routeRepository
    );
  }

  public findItem(id: string) {
    this.findItemUseCase.handle(id);
  }

  public getItem() {
    return this.itemPresenter.format();
  }

  public openDeleteResultPage() {
    this.openDeleteResultPageUseCase.handle();
  }
}