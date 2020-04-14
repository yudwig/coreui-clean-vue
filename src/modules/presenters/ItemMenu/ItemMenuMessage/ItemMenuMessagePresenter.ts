import {ItemMenuMessagePresenterInterface} from "./ItemMenuMessagePresenterInterface";
import {ItemMenuMessage, ItemMenuMessagePresentation} from "../../../presentations/ItemMenu/ItemMenuMessagePresentation";
import {ItemMenuStateInterface} from "../../../states/ItemMenuStateInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class ItemMenuMessagePresenter implements ItemMenuMessagePresenterInterface {

  private itemMenuState: ItemMenuStateInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    itemMenuState: ItemMenuStateInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  format(): ItemMenuMessagePresentation {

    const message = this.itemMenuState.getMessage();
    switch (message) {
      case ItemMenuMessage.Message.DELETE_ERROR:
        return {
          message: 'Error. Failed to delete item.',
          className: ItemMenuMessage.ClassName.ERROR
        };
      case ItemMenuMessage.Message.NETWORK_ERROR:
        return {
          message: 'Network Error. Please retry.',
          className: ItemMenuMessage.ClassName.ERROR
        };
      default:
        return {
          message: '',
          className: ''
        };
    }
  }
}
