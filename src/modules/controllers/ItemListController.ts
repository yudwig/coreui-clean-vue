import {VuexItemListViewStateAdapter} from "../../vue/states/VuexItemListViewStateAdapter";
import {ItemListViewStateInterface} from "../states/ItemListViewStateInterface";
import {CreateSearchItemsQueryUseCase} from "../usecases/ItemList/CreateSearchItemsQuery/CreateSearchItemsQueryUseCase";
import {CreateSearchItemsQueryInteractor} from "../usecases/ItemList/CreateSearchItemsQuery/CreateSearchItemsQueryInteractor";
import {MockGetItemsQueryRepository} from "../repositories/SearchItemsQuery/MockGetItemsQueryRepository";
import {SearchItemsUseCase} from "../usecases/ItemList/SearchItems/SearchItemsUseCase";
import {MockSearchItemsInteractor} from "../usecases/ItemList/SearchItems/MockSearchItemsInteractor";
import {MockItemRepository} from "../repositories/Item/MockItemRepository";
import {OpenItemDetailUseCase} from "../usecases/ItemList/OpenItemDetail/OpenItemDetailUseCase";
import {CloseItemDetailUseCase} from "../usecases/ItemList/CloseItemDetail/CloseItemDetailUseCase";
import {OpenItemDetailInteractor} from "../usecases/ItemList/OpenItemDetail/OpenItemDetailInteractor";
import {CloseItemDetailInteractor} from "../usecases/ItemList/CloseItemDetail/CloseItemDetailInteractor";
import {ReplaceCloseItemDetailInteractor} from "../usecases/ItemList/CloseItemDetail/ReplaceCloseItemDetailInteractor";
import {BackCloseItemDetailInteractor} from "../usecases/ItemList/CloseItemDetail/BackCloseItemDetailInteractor";
import {OpenedItemPresenterInterface} from "../presenters/ItemList/OpenedItem/OpenedItemPresenterInterface";
import {OpenedItemPresenter} from "../presenters/ItemList/OpenedItem/OpenedItemPresenter";
import {ItemsPresenterInterface} from "../presenters/ItemList/Items/ItemsPresenterInterface";
import {ItemsPresenter} from "../presenters/ItemList/Items/ItemsPresenter";
import {ItemListMessagePresenterInterface} from "../presenters/ItemList/ItemListMessage/ItemListMessagePresenterInterface";
import {ItemListMessagePresenter} from "../presenters/ItemList/ItemListMessage/ItemListMessagePresenter";
import {RouteRepositoryInterface} from "../repositories/Route/RouteRepositoryInterface";
import {UrlRepositoryInterface} from "../repositories/Url/UrlRepositoryInterface";
import {RouteRepository} from "../repositories/Route/RouteRepository";
import {UrlRepository} from "../repositories/Url/UrlRepository";
import {VueRouterUrlDriver} from "../../vue/drivers/VueRouterUrlDriver";
import {UrlTranslator} from "../translaters/Url/UrlTranslator";
import {UrlGateway} from "../gateways/Url/UrlGateway";
import {UrlFactory} from "../factories/Url/UrlFactory";
import {InitItemListStateUseCase} from "../usecases/ItemList/InitItemListStateUseCase/InitItemListStateUseCase";
import {InitItemListStateInteractor} from "../usecases/ItemList/InitItemListStateUseCase/InitItemListStateInteractor";
import {OpenItemEditPageUseCase} from "../usecases/ItemMenu/OpenItemEditPage/OpenItemEditPageUseCase";
import {PushOpenItemEditPageInteractor} from "../usecases/ItemMenu/OpenItemEditPage/PushOpenItemEditPageInteractor";
import {DeleteItemUseCase} from "../usecases/ItemMenu/DeleteItem/DeleteItemUseCase";
import {DeleteItemInteractor} from "../usecases/ItemMenu/DeleteItem/DeleteItemInteractor";

export class ItemListController {

  private itemListState: ItemListViewStateInterface;
  private routeRepository: RouteRepositoryInterface;
  private urlRepository:  UrlRepositoryInterface;

  private createGetItemsQueryUseCase: CreateSearchItemsQueryUseCase;
  private searchItemsUseCase: SearchItemsUseCase;
  private openItemDetailUseCase: OpenItemDetailUseCase;
  private closeButtonClickedUseCase: CloseItemDetailUseCase;
  private popStateUseCase: CloseItemDetailUseCase;
  private openItemEditPageUseCase: OpenItemEditPageUseCase;
  private initItemListStateUseCase: InitItemListStateUseCase;
  private deleteItemUseCase: DeleteItemUseCase;

  private openedItemPresenter: OpenedItemPresenterInterface;
  private itemsPresenter: ItemsPresenterInterface;
  private messagePresenter: ItemListMessagePresenterInterface;

  constructor() {
    this.itemListState = new VuexItemListViewStateAdapter();
    this.routeRepository = new RouteRepository();
    this.urlRepository = new UrlRepository(
      new VueRouterUrlDriver(),
      new UrlTranslator(
        new UrlGateway(),
        new UrlFactory()
      )
    );

    this.createGetItemsQueryUseCase = new CreateSearchItemsQueryInteractor(
      new MockGetItemsQueryRepository()
    );
    this.searchItemsUseCase = new MockSearchItemsInteractor(
      new MockItemRepository(),
      new MockGetItemsQueryRepository(),
      this.itemListState
    );
    this.openItemDetailUseCase = new OpenItemDetailInteractor();
    this.closeButtonClickedUseCase = new ReplaceCloseItemDetailInteractor();
    this.popStateUseCase = new CloseItemDetailInteractor();
    this.deleteItemUseCase = new DeleteItemInteractor(
      this.itemGateway,
      this.itemRepository,
      this.routeRepository,
      this.urlRepository,
      this.loggingService,
      this.itemListState,
      this.itemEditState
    );

    this.openedItemPresenter = new OpenedItemPresenter();
    this.itemsPresenter = new ItemsPresenter(
      this.itemListState
    );
    this.messagePresenter = new ItemListMessagePresenter(
      this.itemListState
    );
    this.openItemEditPageUseCase = new PushOpenItemEditPageInteractor(
      this.routeRepository,
      this.urlRepository
    );
    this.initItemListStateUseCase = new InitItemListStateInteractor(
      this.itemListState
    );
  }

  public popStateCallback() {
    this.popStateUseCase.handle();
  }

  public searchItems() {
    console.log(this.searchItemsUseCase.handle());
    this.searchItemsUseCase.handle();
  }

  public getItems() {
    return this.itemsPresenter.format();
  }

  public getOpenedItem() {
    return this.openedItemPresenter.format();
  }

  public openItem(id: string) {
    this.openItemDetailUseCase.handle(id);
  }

  public openItemEditPage(id: string) {
    this.openItemEditPageUseCase.handle(id);
  }

  public closeItem() {
    this.closeButtonClickedUseCase.handle();
  }

  public getMessage() {
    return this.messagePresenter.format();
  }

  public getUrl() {
    return this.urlRepository.get();
  }

  public initState() {
    console.log('initState is called.');
    this.initItemListStateUseCase.handle();
  }

}
