import {ItemsPresenterInterface} from "./ItemsPresenterInterface";
import {ItemsPresentation} from "../../../presentations/ItemList/ItemsPresentation";
import {ItemListViewStateInterface} from "../../../states/ItemListViewStateInterface";

export class ItemsPresenter implements ItemsPresenterInterface{

  private itemListState: ItemListViewStateInterface;

  constructor(itemListState: ItemListViewStateInterface) {
    this.itemListState = itemListState;
  }

  public format(): ItemsPresentation {
    const items = this.itemListState.getItems();
    console.log('items', items);
    const list = items ? items.getList().map(item => {
      return {
        id: item.id.value,
        title: item.title.value,
        imageUrl: item.imageUrl.href.value
      };
    }) : null;
    console.log('list', list);
    return {
      list: list,
      count: list ? list.length : 0
    };
  }
}