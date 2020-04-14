import {InitItemListStateUseCase} from "./InitItemListStateUseCase";
import {ItemListViewStateInterface} from "../../../states/ItemListViewStateInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class InitItemListStateInteractor implements InitItemListStateUseCase {

  private itemListState: ItemListViewStateInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    itemListState: ItemListViewStateInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  handle() {
    this.itemListState.clearOpenedItem();
    this.itemListState.clearMessage();
  }
}