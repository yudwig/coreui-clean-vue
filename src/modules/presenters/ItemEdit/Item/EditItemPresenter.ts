import {EditItemPresenterInterface} from "./EditItemPresenterInterface";
import {ItemPresentation} from "../../../presentations/ItemEdit/ItemPresentation";
import {ItemEditViewStateInterface} from "../../../states/ItemEditViewStateInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class EditItemPresenter implements EditItemPresenterInterface {

  private itemEditState: ItemEditViewStateInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    itemEditState: ItemEditViewStateInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  format(): ItemPresentation {
    const item = this.itemEditState.getItem();
    this.support.debug('edit item presenter', item);
    return {
      title: item ? item.title.value : '',
      comment: item ? item.comment.value : '',
      imageUrl: item ? item.imageUrl.href.value : ''
    };
  }
}