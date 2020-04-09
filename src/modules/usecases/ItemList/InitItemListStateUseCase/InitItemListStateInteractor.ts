import {InitItemListStateUseCase} from "./InitItemListStateUseCase";
import {ItemListViewStateInterface} from "../../../states/ItemListViewStateInterface";

export class InitItemListStateInteractor implements InitItemListStateUseCase {

  private itemListState: ItemListViewStateInterface;

  constructor(itemListState: ItemListViewStateInterface) {
    this.itemListState = itemListState;
  }

  handle() {
    this.itemListState.clearOpenedItem();
    this.itemListState.clearMessage();
  }
}