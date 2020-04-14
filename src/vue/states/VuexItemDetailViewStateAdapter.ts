import {ItemDetailViewStateInterface} from "../../modules/states/ItemDetailViewStateInterface";
import {Item} from "../../modules/entities/Item";
import {VuexItemDetailViewState as state} from "./VuexItemDetailViewState";

export class VuexItemDetailViewStateAdapter implements ItemDetailViewStateInterface {

  getItem(): Item {
    return state.getters['item'];
  }

  setItem(item: Item) {
    state.dispatch('setItem', item);
  }
}