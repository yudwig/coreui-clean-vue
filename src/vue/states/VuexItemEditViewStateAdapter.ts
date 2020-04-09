import {ItemEditViewStateInterface} from "../../modules/states/ItemEditViewStateInterface";
import {Item} from "../../modules/entities/Item";
import {ItemEditMessage} from "../../modules/presentations/ItemEdit/ItemEditMessagePresentation";
import {VuexItemEditViewState as state} from "./VuexItemEditViewState";

export class VuexItemEditViewStateAdapter implements ItemEditViewStateInterface {

  getItem(): Item {
    return state.getters['item'];
  }

  getMessage(): ItemEditMessage.Message {
    return state.getters['message'];
  }

  setItem(item: Item) {
    state.dispatch('setItem', item);
  }

  setMessage(message: ItemEditMessage.Message) {
    state.dispatch('setMessage', message);
  }

  clearItem() {
    state.dispatch('clearItem');
  }

  clearMessage() {
    state.dispatch('clearMessage');
  }
}