import {CloseItemDetailUseCase} from "./CloseItemDetailUseCase";
import {ItemListViewStateInterface} from "../../../states/ItemListViewStateInterface";
import {RouteRepositoryInterface} from "../../../repositories/Route/RouteRepositoryInterface";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class ReplaceCloseItemDetailInteractor implements CloseItemDetailUseCase {

  private itemListStore: ItemListViewStateInterface;
  private urlRepository: UrlRepositoryInterface;
  private routeRepository: RouteRepositoryInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    itemListStore: ItemListViewStateInterface,
    urlRepository: UrlRepositoryInterface,
    routeRepository: RouteRepositoryInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  handle() {
    if (this.itemListStore.getOpenedItem() === null) {
      return;
    }
    this.itemListStore.setOpenedItem(null);
    const res = this.routeRepository.findByName('itemList');
    if (res.err) {
      this.support.error('system error. res: ', res);
    }
    this.urlRepository.replace(res.data);
  }
}