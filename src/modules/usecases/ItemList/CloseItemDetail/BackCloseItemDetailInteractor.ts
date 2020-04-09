import {CloseItemDetailUseCase} from "./CloseItemDetailUseCase";
import {ItemListViewStateInterface} from "../../../states/ItemListViewStateInterface";
import {RouteConfig} from "../../../configs/RouteConfig";
import {RouterDriverInterface} from "../../../drivers/Router/RouterDriverInterface";
import {VuexItemListViewStateAdapter} from "../../../../vue/states/VuexItemListViewStateAdapter";
import {VueRouterDriver} from "../../../../vue/drivers/VueRouterDriver";

export class BackCloseItemDetailInteractor implements CloseItemDetailUseCase {

  private itemListStore: ItemListViewStateInterface;
  private routeConfig: RouteConfig;
  private routerDriver: RouterDriverInterface;

  constructor() {
    this.itemListStore = new VuexItemListViewStateAdapter();
    this.routeConfig =  new RouteConfig();
    this.routerDriver = new VueRouterDriver();
  }

  handle() {
    if (this.itemListStore.getOpenedItem() === null) {
      return;
    }
    this.itemListStore.setOpenedItem(null);
    this.routerDriver.pop();
  }
}