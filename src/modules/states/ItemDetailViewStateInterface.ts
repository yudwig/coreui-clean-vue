import {Item} from "../entities/Item";

export interface ItemDetailViewStateInterface {
  setItem(item: Item);
  getItem(): Item;
}