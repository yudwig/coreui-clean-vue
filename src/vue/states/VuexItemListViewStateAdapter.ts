import {ItemListViewStateInterface} from "../../modules/states/ItemListViewStateInterface";
import {Item} from "../../modules/entities/Item";
import {VuexItemListViewState as store} from "./VuexItemListViewState";
import {Items} from "../../modules/entities/Items";
import {ItemSearchQuery} from "../../modules/queries/ItemList/ItemSearchQuery";
import {ItemListMessage} from "../../modules/presentations/ItemList/ItemListMessagePresentation";

export class VuexItemListViewStateAdapter implements ItemListViewStateInterface {

  getItems(): Items {
    return store.getters['items'];
  }

  getOpenedItem(): Item {
    return store.getters['openedItem'];
  }

  setItems(items: Items) {
    store.dispatch('setItems', items);
  }

  setOpenedItem(item: Item) {
    store.dispatch('setOpenedItem', item)
  }

  setItemSearchQuery(itemSearchQuery: ItemSearchQuery) {
    store.dispatch('setItemSearchQuery', itemSearchQuery);
  }

  getItemSearchQuery(): ItemSearchQuery {
    return store.getters['itemSearchQuery'];
  }

  getMessage(): ItemListMessage {
    return store.getters['message'];
  }

  setMessage(message: ItemListMessage) {
    store.dispatch('setMessage', message);
  }

  clearOpenedItem() {
    store.dispatch('clearOpenedItem');
  }

  clearMessage() {
    store.dispatch('clearMessage');
  }
}