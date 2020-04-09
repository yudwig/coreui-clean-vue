import {ItemCreateMessagePresenterInterface} from "./ItemCreateMessagePresenterInterface";
import {ItemCreateViewStateInterface} from "../../../states/ItemCreateViewStateInterface";
import {ItemCreateMessage, ItemCreateMessagePresentation} from "../../../presentations/ItemCreate/ItemCreateMessagePresentation";

export class ItemCreateMessagePresenter implements ItemCreateMessagePresenterInterface {

  private itemCreateState: ItemCreateViewStateInterface;

  constructor(itemCreateState: ItemCreateViewStateInterface) {
    this.itemCreateState = itemCreateState;
  }

  format(): ItemCreateMessagePresentation {
    const message = this.itemCreateState.getMessage();
    switch (message) {
      case ItemCreateMessage.Message.CREATE_SUCCESS:
        return {
          message: "",
          className: ItemCreateMessage.ClassName.SUCCESS,
          isSuccess: true
        };
      case ItemCreateMessage.Message.CREATE_ERROR:
        return {
          message: "Error. Failed to create item.",
          className: ItemCreateMessage.ClassName.ERROR,
          isSuccess: false
        };
      case ItemCreateMessage.Message.NETWORK_ERROR:
        return {
          message: "Network Error. Failed to create item ",
          className: ItemCreateMessage.ClassName.ERROR,
          isSuccess: false
        };
      default:
        return {
          message: "",
          className: "",
          isSuccess: false
        }
    }
  }
}