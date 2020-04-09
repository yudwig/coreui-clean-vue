import {CloseItemDetailUseCase} from "./CloseItemDetailUseCase";
import {ItemListViewStateInterface} from "../../../states/ItemListViewStateInterface";
import {VuexItemListViewStateAdapter} from "../../../../vue/states/VuexItemListViewStateAdapter";
import {RouteConfig} from "../../../configs/RouteConfig";
import {RouteRepositoryInterface} from "../../../repositories/Route/RouteRepositoryInterface";
import {RouteRepository} from "../../../repositories/Route/RouteRepository";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";
import {VueRouterUrlDriver} from "../../../../vue/drivers/VueRouterUrlDriver";
import {UrlTranslator} from "../../../translaters/Url/UrlTranslator";
import {UrlGateway} from "../../../gateways/Url/UrlGateway";
import {UrlFactory} from "../../../factories/Url/UrlFactory";
import {UrlRepository} from "../../../repositories/Url/UrlRepository";

export class ReplaceCloseItemDetailInteractor implements CloseItemDetailUseCase {

  private itemListStore: ItemListViewStateInterface;
  private routeConfig: RouteConfig;
  private urlRepository: UrlRepositoryInterface;
  private routeRepository: RouteRepositoryInterface;

  constructor() {
    this.itemListStore = new VuexItemListViewStateAdapter();
    this.routeConfig =  new RouteConfig();
    this.urlRepository = new UrlRepository(
      new VueRouterUrlDriver(),
      new UrlTranslator(
        new UrlGateway(),
        new UrlFactory()
      )
    );
    this.routeRepository = new RouteRepository();
  }

  handle() {
    if (this.itemListStore.getOpenedItem() === null) {
      return;
    }
    this.itemListStore.setOpenedItem(null);
    const res = this.routeRepository.findByName('itemList');
    if (res.err) {
      console.log('system error. res: ', res);
    }
    this.urlRepository.replaceByRoute(res.data);
  }
}