import {OpenedItemPresenterInterface} from "./OpenedItemPresenterInterface";
import {ItemListViewStateInterface} from "../../../states/ItemListViewStateInterface";
import {VuexItemListViewStateAdapter} from "../../../../vue/states/VuexItemListViewStateAdapter";
import {OpenedItemPresentation} from "../../../presentations/ItemList/OpenedItemPresentation";

export class OpenedItemPresenter implements OpenedItemPresenterInterface {

  private itemState: ItemListViewStateInterface;

  constructor() {
    this.itemState = new VuexItemListViewStateAdapter();
  }

  format(): OpenedItemPresentation {
    const item = this.itemState.getOpenedItem();
    console.log(item);
    return item ? {
      id: item.id.value.toString(),
      title: item.title.value,
      comment: item.comment.value,
      imageUrl: item.imageUrl.href.value,
    } : null;
  }
}