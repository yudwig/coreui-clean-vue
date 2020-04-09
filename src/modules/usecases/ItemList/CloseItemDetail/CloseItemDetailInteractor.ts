import {CloseItemDetailUseCase} from "./CloseItemDetailUseCase";
import {ItemListViewStateInterface} from "../../../states/ItemListViewStateInterface";
import {VuexItemListViewStateAdapter} from "../../../../vue/states/VuexItemListViewStateAdapter";

export class CloseItemDetailInteractor implements CloseItemDetailUseCase {

  private itemListStore: ItemListViewStateInterface;

  constructor() {
    this.itemListStore = new VuexItemListViewStateAdapter();
  }

  public handle() {
    if (this.itemListStore.getOpenedItem() === null) {
      return;
    }
    this.itemListStore.setOpenedItem(null);
  }
}