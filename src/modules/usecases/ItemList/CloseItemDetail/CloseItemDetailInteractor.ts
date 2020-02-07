import {CloseItemDetailUseCase} from "./CloseItemDetailUseCase";
import {ItemListStoreInterface} from "../../../stores/ItemListStoreInterface";
import {VuexItemListStoreAdaptor} from "../../../../vue/stores/VuexItemListStoreAdaptor";

export class CloseItemDetailInteractor implements CloseItemDetailUseCase {

    private itemListStore: ItemListStoreInterface;

    constructor() {
        this.itemListStore = new VuexItemListStoreAdaptor();
    }

    public handle() {
        if (this.itemListStore.getOpenedItem() === null) {
            return;
        }
        this.itemListStore.setOpenedItem(null);
    }
}