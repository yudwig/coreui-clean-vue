import {OpenedItemPresenterInterface} from "./OpenedItemPresenterInterface";
import {ItemListViewStateInterface} from "../../../states/ItemListViewStateInterface";
import {OpenedItemPresentation} from "../../../presentations/ItemList/OpenedItemPresentation";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class OpenedItemPresenter implements OpenedItemPresenterInterface {

  private itemListState: ItemListViewStateInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    itemListState: ItemListViewStateInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  format(): OpenedItemPresentation {
    const item = this.itemListState.getOpenedItem();
    this.support.debug(item);
    return item ? {
      id: item.id.value.toString(),
      title: item.title.value,
      comment: item.comment.value,
      imageUrl: item.imageUrl.href.value,
    } : null;
  }
}