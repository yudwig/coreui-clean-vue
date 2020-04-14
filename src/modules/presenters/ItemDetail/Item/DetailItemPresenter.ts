import {DetailItemPresenterInterface} from "./DetailItemPresenterInterface";
import {ItemPresentation} from "../../../presentations/ItemDetail/ItemPresentation";
import {ItemDetailViewStateInterface} from "../../../states/ItemDetailViewStateInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class DetailItemPresenter implements DetailItemPresenterInterface {

  private itemDetailState: ItemDetailViewStateInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    itemDetailState: ItemDetailViewStateInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
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