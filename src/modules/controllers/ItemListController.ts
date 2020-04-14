import {SearchItemsUseCase} from "../usecases/ItemList/SearchItems/SearchItemsUseCase";
import {OpenItemDetailUseCase} from "../usecases/ItemList/OpenItemDetail/OpenItemDetailUseCase";
import {CloseItemDetailUseCase} from "../usecases/ItemList/CloseItemDetail/CloseItemDetailUseCase";
import {OpenedItemPresenterInterface} from "../presenters/ItemList/OpenedItem/OpenedItemPresenterInterface";
import {ItemsPresenterInterface} from "../presenters/ItemList/Items/ItemsPresenterInterface";
import {ItemListMessagePresenterInterface} from "../presenters/ItemList/ItemListMessage/ItemListMessagePresenterInterface";
import {InitItemListStateUseCase} from "../usecases/ItemList/InitItemListState/InitItemListStateUseCase";
import {ModuleSupportInterface} from "../supports/ModuleSupportInterface";
import {SyncUrlToStateUseCase} from "../usecases/ItemList/SyncUrlToState/SyncUrlToStateUseCase";

export class ItemListController {

  private searchItemsUseCase: SearchItemsUseCase;
  private openItemDetailUseCase: OpenItemDetailUseCase;
  private closeItemDetailUseCase: CloseItemDetailUseCase;
  private initItemListStateUseCase: InitItemListStateUseCase;
  private syncUrlToStateUseCase: SyncUrlToStateUseCase;
  private openedItemPresenter: OpenedItemPresenterInterface;
  private itemsPresenter: ItemsPresenterInterface;
  private itemListMessagePresenter: ItemListMessagePresenterInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    searchItemsUseCase: SearchItemsUseCase,
    openItemDetailUseCase: OpenItemDetailUseCase,
    closeItemDetailUseCase: CloseItemDetailUseCase,
    initItemListStateUseCase: InitItemListStateUseCase,
    syncUrlToStateUseCase: SyncUrlToStateUseCase,
    openedItemPresenter: OpenedItemPresenterInterface,
    itemsPresenter: ItemsPresenterInterface,
    itemListMessagePresenter: ItemListMessagePresenterInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public popStateCallback() {
    this.syncUrlToStateUseCase.handle();
  }

  public searchItems() {
    this.support.debug(this.searchItemsUseCase.handle());
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

  public closeItem() {
    this.closeItemDetailUseCase.handle();
  }

  public getMessage() {
    return this.itemListMessagePresenter.format();
  }

  public initState() {
    this.support.debug('initState is called.');
    this.initItemListStateUseCase.handle();
  }
}
