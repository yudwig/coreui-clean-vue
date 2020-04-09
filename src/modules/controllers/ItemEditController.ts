import {ItemEditMessagePresenterInterface} from "../presenters/ItemEdit/ItemEditMessage/ItemEditMessagePresenterInterface";
import {FindItemUseCase} from "../usecases/ItemEdit/FindItem/FindItemUseCase";
import {ItemEditMessagePresenter} from "../presenters/ItemEdit/ItemEditMessage/ItemEditMessagePresenter";
import {ItemEditViewStateInterface} from "../states/ItemEditViewStateInterface";
import {VuexItemEditViewStateAdapter} from "../../vue/states/VuexItemEditViewStateAdapter";
import {FindItemInteractor} from "../usecases/ItemEdit/FindItem/FindItemInteractor";
import {MockItemRepository} from "../repositories/Item/MockItemRepository";
import {ItemGateway} from "../gateways/Item/ItemGateway";
import {ItemGatewayInterface} from "../gateways/Item/ItemGatewayInterface";
import {ItemRepositoryInterface} from "../repositories/Item/ItemRepositoryInterface";
import {ItemPresenterInterface} from "../presenters/ItemEdit/Item/ItemPresenterInterface";
import {ItemPresenter} from "../presenters/ItemEdit/Item/ItemPresenter";
import {UpdateItemUseCase} from "../usecases/ItemEdit/UpdateItem/UpdateItemUseCase";
import {UpdateItemInteractor} from "../usecases/ItemEdit/UpdateItem/UpdateItemInteractor";
import {ItemFactoryInterface} from "../factories/Item/ItemFactoryInterface";
import {ItemFactory} from "../factories/Item/ItemFactory";
import {RouteRepository} from "../repositories/Route/RouteRepository";
import {UrlRepository} from "../repositories/Url/UrlRepository";
import {VueRouterUrlDriver} from "../../vue/drivers/VueRouterUrlDriver";
import {UrlTranslator} from "../translaters/Url/UrlTranslator";
import {UrlGateway} from "../gateways/Url/UrlGateway";
import {UrlFactory} from "../factories/Url/UrlFactory";
import {RouteRepositoryInterface} from "../repositories/Route/RouteRepositoryInterface";
import {UrlRepositoryInterface} from "../repositories/Url/UrlRepositoryInterface";

export class ItemEditController {

  private itemEditStatusPresenter: ItemEditMessagePresenterInterface;
  private itemEditState: ItemEditViewStateInterface;
  private itemGateway: ItemGatewayInterface;
  private itemFactory: ItemFactoryInterface;
  private itemRepository: ItemRepositoryInterface;
  private routeRepository: RouteRepositoryInterface;
  private urlRepository: UrlRepositoryInterface;

  private findItemUseCase: FindItemUseCase;
  private updateItemUseCase: UpdateItemUseCase;
  private itemPresenter: ItemPresenterInterface;

  constructor() {
    this.itemEditState = new VuexItemEditViewStateAdapter();
    this.itemEditStatusPresenter = new ItemEditMessagePresenter(this.itemEditState);
    this.itemGateway = new ItemGateway();
    this.itemFactory = new ItemFactory();
    this.itemRepository = new MockItemRepository();
    this.routeRepository = new RouteRepository();
    this.urlRepository = new UrlRepository(
      new VueRouterUrlDriver(),
      new UrlTranslator(
        new UrlGateway(),
        new UrlFactory()
      )
    );
    this.findItemUseCase = new FindItemInteractor(
      this.itemRepository,
      this.itemGateway,
      this.itemEditState
    );
    this.updateItemUseCase = new UpdateItemInteractor(
      this.itemEditState,
      this.itemGateway,
      this.itemFactory,
      this.itemRepository,
      this.routeRepository,
      this.urlRepository
    );
    this.itemPresenter = new ItemPresenter(
      this.itemEditState
    );
  }

  public findItem(id: string) {
    this.findItemUseCase.handle(id);
  }

  public updateItem(form: object) {
    this.updateItemUseCase.handle(form);
  }

  public getEditStatus() {
    return this.itemEditStatusPresenter.format();
  }

  public getItem() {
    return this.itemPresenter.format();
  }
}