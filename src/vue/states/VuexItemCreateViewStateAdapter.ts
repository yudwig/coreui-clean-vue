import {ItemCreateViewStateInterface} from "../../modules/states/ItemCreateViewStateInterface";
import {VuexItemCreateViewState as state} from "./VuexItemCreateViewState";
import {ItemCreateMessage} from "../../modules/presentations/ItemCreate/ItemCreateMessagePresentation";

export class VuexItemCreateViewStateAdapter implements ItemCreateViewStateInterface {

  getCreateStatus(): boolean {
    return state.getters['isSuccess'];
  }

  getMessage(): ItemCreateMessage.Message {
    return state.getters['message'];
  }

  setCreateStatus(isSuccess: boolean) {
    state.dispatch('setCreateStatus', isSuccess);
  }

  setMessage(message: ItemCreateMessage.Message) {
    state.dispatch('setMessage', message);
  }

  clearCreateStatus() {
    state.dispatch('clearCreateStatus');
  }

  clearMessage() {
    state.dispatch('clearMessage');
  }
}