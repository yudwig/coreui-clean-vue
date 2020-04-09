import {GetOpenedItemUseCase} from "./GetOpenedItemUseCase";
import {ItemListViewStateInterface} from "../../../states/ItemListViewStateInterface";
import {VuexItemListViewStateAdapter} from "../../../../vue/states/VuexItemListViewStateAdapter";
import {Item} from "../../../entities/Item";

export class GetOpenedItemInteractor implements GetOpenedItemUseCase {

  private itemListStore: ItemListViewStateInterface;

  constructor() {
    this.itemListStore = new VuexItemListViewStateAdapter();
  }

  handle(): Item {
    return this.itemListStore.getOpenedItem();
  }
}