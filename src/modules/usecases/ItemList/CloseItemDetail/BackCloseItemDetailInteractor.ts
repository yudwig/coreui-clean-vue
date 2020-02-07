import {CloseItemDetailUseCase} from "./CloseItemDetailUseCase";
import {ItemListStoreInterface} from "../../../stores/ItemListStoreInterface";
import {RouteConfig} from "../../../configs/RouteConfig";
import {RouterDriverInterface} from "../../../drivers/RouterDriverInterface";
import {VuexItemListStoreAdaptor} from "../../../../vue/stores/VuexItemListStoreAdaptor";
import {VueRouterDriver} from "../../../drivers/VueRouterDriver";

export class BackCloseItemDetailInteractor implements CloseItemDetailUseCase {

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
        this.routerDriver.pop();
    }
}