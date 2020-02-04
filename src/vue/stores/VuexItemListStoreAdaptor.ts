import {ItemListStoreInterface} from "../../modules/stores/ItemListStoreInterface";
import {Item} from "../../modules/entities/Item";
import {VuexItemListStore as store} from "./VuexItemListStore";

export class VuexItemListStoreAdaptor implements ItemListStoreInterface {

    getItems(): Array<Item> {
        return store.getters['items'];
    }

    getOpenedItem(): Item {
        return store.getters['openedItem'];
    }

    setItems(items: Array<Item>) {
        store.dispatch('setItems', items);
    }

    setOpenedItem(item: Item) {
        store.dispatch('setOpenedItem', item)
    }
}