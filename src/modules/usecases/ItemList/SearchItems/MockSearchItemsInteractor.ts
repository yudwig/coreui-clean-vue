import {SearchItemsUseCase} from "./SearchItemsUseCase";
import {ItemRepositoryInterface} from "../../../repositories/Item/ItemRepositoryInterface";
import {ItemListViewStateInterface} from "../../../states/ItemListViewStateInterface";
import {VuexItemListViewStateAdapter} from "../../../../vue/states/VuexItemListViewStateAdapter";
import {SearchItemsQueryRepositoryInterface} from "../../../repositories/SearchItemsQuery/SearchItemsQueryRepositoryInterface";

export class MockSearchItemsInteractor implements SearchItemsUseCase {

  private itemRepository: ItemRepositoryInterface;
  private searchItemsQueryRepository: SearchItemsQueryRepositoryInterface;
  private itemListState: ItemListViewStateInterface;

  constructor(
    itemRepository: ItemRepositoryInterface,
    searchItemsQueryRepository: SearchItemsQueryRepositoryInterface,
    itemListState: ItemListViewStateInterface
  ) {
    this.itemRepository = itemRepository;
    this.searchItemsQueryRepository = searchItemsQueryRepository;
    this.itemListState = itemListState
  }

  handle() {
    const query = this.searchItemsQueryRepository.get();
    const items = this.itemRepository.search(query);
    if (items.err) {
      console.log('search items is failed. err:', items.err);
      return false;
    }
    console.log("search items: ", items, query);
    this.itemListState.setItems(items.data);
  }
}
