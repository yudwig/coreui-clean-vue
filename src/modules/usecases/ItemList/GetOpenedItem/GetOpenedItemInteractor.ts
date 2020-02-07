import {GetOpenedItemUseCase} from "./GetOpenedItemUseCase";
import {ItemListStoreInterface} from "../../../stores/ItemListStoreInterface";
import {VuexItemListStoreAdaptor} from "../../../../vue/stores/VuexItemListStoreAdaptor";
import {Item} from "../../../entities/Item";

export class GetOpenedItemInteractor implements GetOpenedItemUseCase {

    private itemListStore: ItemListStoreInterface;

    constructor() {
        this.itemListStore = new VuexItemListStoreAdaptor();
    }

    handle(): Item {
        return this.itemListStore.getOpenedItem();
    }
}