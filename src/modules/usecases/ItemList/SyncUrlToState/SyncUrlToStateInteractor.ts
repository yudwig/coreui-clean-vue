import {SyncUrlToStateUseCase} from "./SyncUrlToStateUseCase";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";
import {ItemListViewStateInterface} from "../../../states/ItemListViewStateInterface";

export class SyncUrlToStateInteractor implements SyncUrlToStateUseCase {

  private urlRepository: UrlRepositoryInterface;
  private support: ModuleSupportInterface;
  private itemListState: ItemListViewStateInterface;

  constructor(modules: {
    urlRepository: UrlRepositoryInterface,
    itemListState: ItemListViewStateInterface
  }) {
    Object.assign(this, modules);
  }

  handle() {
    const now = this.urlRepository.get();
    if (now.err) {
      this.support.error(now.err);
      return false;
    }
    this.support.debug('now: ', now);
    if (now.data.directories.list.length === 1) {
      this.itemListState.clearOpenedItem();
    }
  }
}