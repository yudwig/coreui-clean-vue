import {CloseItemDetailUseCase} from "./CloseItemDetailUseCase";
import {ItemListStoreInterface} from "../../../stores/ItemListStoreInterface";
import {VuexItemListStoreAdaptor} from "../../../../vue/stores/VuexItemListStoreAdaptor";
import {RouteConfig} from "../../../configs/RouteConfig";
import {RouterDriverInterface} from "../../../drivers/RouterDriverInterface";
import {VueRouterDriver} from "../../../drivers/VueRouterDriver";

export class ReplaceCloseItemDetailInteractor implements CloseItemDetailUseCase {

    private itemListStore: ItemListStoreInterface;
    private routeConfig: RouteConfig;
    private routerDriver: RouterDriverInterface;

    constructor() {
        this.itemListStore = new VuexItemListStoreAdaptor();
        this.routeConfig =  new RouteConfig();
        this.routerDriver = new VueRouterDriver();
    }

    handle() {
        if (this.itemListStore.getOpenedItem() === null) {
            return;
        }
        this.itemListStore.setOpenedItem(null);
        this.routerDriver.replace(this.routeConfig.get('itemList').path, {});
    }
}