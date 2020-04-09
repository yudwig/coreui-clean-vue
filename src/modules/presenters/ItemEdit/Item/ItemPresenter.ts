import {ItemPresenterInterface} from "./ItemPresenterInterface";
import {ItemPresentation} from "../../../presentations/ItemEdit/ItemPresentation";
import {ItemEditViewStateInterface} from "../../../states/ItemEditViewStateInterface";

export class ItemPresenter implements ItemPresenterInterface {

  private itemEditState: ItemEditViewStateInterface;

  constructor(itemEditState: ItemEditViewStateInterface) {
    this.itemEditState = itemEditState;
  }

  format(): ItemPresentation {
    const item = this.itemEditState.getItem();
    return {
      title: item ? item.title.value : '',
      comment: item ? item.comment.value : '',
      imageUrl: item ? item.imageUrl.href.value : ''
    };
  }
}