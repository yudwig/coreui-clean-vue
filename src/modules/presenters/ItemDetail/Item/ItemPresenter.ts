import {ItemPresenterInterface} from "./ItemPresenterInterface";
import {ItemPresentation} from "../../../presentations/ItemDetail/ItemPresentation";
import {ItemDetailViewStateInterface} from "../../../states/ItemDetailViewStateInterface";

export class ItemPresenter implements ItemPresenterInterface {

  private itemDetailState: ItemDetailViewStateInterface;

  constructor(itemDetailState: ItemDetailViewStateInterface) {
    this.itemDetailState = itemDetailState;
  }

  format(): ItemPresentation {
    const item = this.itemDetailState.getItem();
    return {
      item: {
        id: item.id.value.toString(),
        title: item.title.value,
        comment: item.comment.value,
        imageUrl: item.imageUrl.href.value
      }
    };
  }
}