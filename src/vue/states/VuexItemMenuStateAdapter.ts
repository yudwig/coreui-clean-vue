import {ItemMenuStateInterface} from "../../modules/states/ItemMenuStateInterface";
import {VuexItemMenuState as state} from "./VuexItemMenuState";
import {ItemMenuMessage} from "../../modules/presentations/ItemMenu/ItemMenuMessagePresentation";

export class VuexItemMenuStateAdapter implements ItemMenuStateInterface {

  getMessage(): ItemMenuMessage.Message {
    return state.getters['message'];
  }

  setMessage(message: ItemMenuMessage.Message) {
    state.dispatch('setMessage', message);
  }

  clearMessage() {
    state.dispatch('clearMessage');
  }
}
