import {CloseItemDetailUseCase} from "./CloseItemDetailUseCase";
import {ItemListViewStateInterface} from "../../../states/ItemListViewStateInterface";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class BackCloseItemDetailInteractor implements CloseItemDetailUseCase {

  private itemListState: ItemListViewStateInterface;
  private urlRepository: UrlRepositoryInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    itemListState: ItemListViewStateInterface,
    urlRepository: UrlRepositoryInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  handle() {
    if (this.itemListState.getOpenedItem() === null) {
      return;
    }
    this.itemListState.setOpenedItem(null);
    this.urlRepository.pop();
  }
}