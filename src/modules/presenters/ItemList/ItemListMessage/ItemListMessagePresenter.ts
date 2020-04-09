import {ItemListMessagePresenterInterface} from "./ItemListMessagePresenterInterface";
import {ItemListViewStateInterface} from "../../../states/ItemListViewStateInterface";
import {ItemListMessage, ItemListMessagePresentation} from "../../../presentations/ItemList/ItemListMessagePresentation";

export class ItemListMessagePresenter implements ItemListMessagePresenterInterface {

  private itemListState: ItemListViewStateInterface;

  constructor(itemListState: ItemListViewStateInterface) {
    this.itemListState = itemListState;
  }

  format(): ItemListMessagePresentation {

    const itemListMessage: ItemListMessage.Message = this.itemListState.getMessage();
    switch (itemListMessage) {
      case ItemListMessage.Message.CREATE_SUCCESS:
        return {
          message: 'New item successfully created.',
          className: ItemListMessage.ClassName.SUCCESS
        };
      case ItemListMessage.Message.TECH_ERROR:
        return {
          message: 'Sorry, Technical Error has occurred... Please wait for resolution this problem.',
          className: ItemListMessage.ClassName.ERROR
        };
      case ItemListMessage.Message.NETWORK_ERROR:
        return {
          message: 'Network error has occurred.',
          className: ItemListMessage.ClassName.ERROR
        };
      default:
        return {
          message: null,
          className: ItemListMessage.ClassName.ERROR
        };
    }
  }
}