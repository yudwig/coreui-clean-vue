import {Item} from "../entities/Item";

export interface ItemListStoreInterface {
    setItems(items: Array<Item>);
    getItems(): Array<Item>;
    setOpenedItem(Item);
    getOpenedItem(): Item;
}

