import {ItemEditMessagePresenterInterface} from "./ItemEditMessagePresenterInterface";
import {ItemEditViewStateInterface} from "../../../states/ItemEditViewStateInterface";
import {ItemEditMessage, ItemEditMessagePresentation} from "../../../presentations/ItemEdit/ItemEditMessagePresentation";

export class ItemEditMessagePresenter implements ItemEditMessagePresenterInterface {

  private itemEditState: ItemEditViewStateInterface;

  constructor(itemEditState: ItemEditViewStateInterface) {
    this.itemEditState = itemEditState;
  }

  format(): ItemEditMessagePresentation {
    const message = this.itemEditState.getMessage();
    switch (message) {
      case ItemEditMessage.Message.UPDATE_ERROR:
        return {
          message: "Error. Failed to update item.",
          className: ItemEditMessage.ClassName.ERROR,
        };
      case ItemEditMessage.Message.NETWORK_ERROR:
        return {
          message: "Network Error. Failed to update item ",
          className: ItemEditMessage.ClassName.ERROR,
        };
      default:
        return {
          message: "",
          className: "",
        }
    }
  }
}