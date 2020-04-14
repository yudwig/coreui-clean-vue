import {ItemsPresenterInterface} from "./ItemsPresenterInterface";
import {ItemsPresentation} from "../../../presentations/ItemList/ItemsPresentation";
import {ItemListViewStateInterface} from "../../../states/ItemListViewStateInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class ItemsPresenter implements ItemsPresenterInterface{

  private itemListState: ItemListViewStateInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    itemListState: ItemListViewStateInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public format(): ItemsPresentation {
    const items = this.itemListState.getItems();
    this.support.debug('items', items);
    const list = items ? items.getList().map(item => {
      return {
        id: item.id.value,
        title: item.title.value,
        imageUrl: item.imageUrl.href.value
      };
    }) : null;
    this.support.debug('list', list);
    return {
      list: list,
      count: list ? list.length : 0
    };
  }
}