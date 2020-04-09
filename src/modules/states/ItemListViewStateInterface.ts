import {Item} from "../entities/Item";
import {Items} from "../entities/Items";
import {ItemSearchQuery} from "../queries/ItemList/ItemSearchQuery";
import {ItemListMessage} from "../presentations/ItemList/ItemListMessagePresentation";

export interface ItemListViewStateInterface {
  setItems(items: Items);
  getItems(): Items;
  setOpenedItem(Item);
  getOpenedItem(): Item;
  clearOpenedItem();
  setItemSearchQuery(itemSearchQuery: ItemSearchQuery);
  getItemSearchQuery(): ItemSearchQuery;
  setMessage(message: ItemListMessage.Message);
  getMessage(): ItemListMessage.Message;
  clearMessage();
}
