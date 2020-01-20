import {Item} from "../../entities/Item";
import {GetItemsQuery} from "../../entities/GetItemsQuery";

export interface ItemRepositoryInterface {
    find(id: number): Item;
    search(query: GetItemsQuery): Array<Item>;
}

