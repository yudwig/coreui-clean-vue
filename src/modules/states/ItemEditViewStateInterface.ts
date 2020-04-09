import {Item} from "../entities/Item";
import {ItemEditMessage} from "../presentations/ItemEdit/ItemEditMessagePresentation";

export interface ItemEditViewStateInterface {
  setItem(item: Item);
  getItem(): Item;
  clearItem();
  setMessage(message: ItemEditMessage.Message);
  getMessage(): ItemEditMessage.Message;
  clearMessage();
}