import {SearchItemsUseCase} from "./SearchItemsUseCase";
import {ItemRepositoryInterface} from "../../../repositories/Item/ItemRepositoryInterface";
import {ItemListViewStateInterface} from "../../../states/ItemListViewStateInterface";
import {SearchItemsQueryRepositoryInterface} from "../../../repositories/SearchItemsQuery/SearchItemsQueryRepositoryInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class MockSearchItemsInteractor implements SearchItemsUseCase {

  private itemRepository: ItemRepositoryInterface;
  private searchItemsQueryRepository: SearchItemsQueryRepositoryInterface;
  private itemListState: ItemListViewStateInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    itemRepository: ItemRepositoryInterface,
    searchItemsQueryRepository: SearchItemsQueryRepositoryInterface,
    itemListState: ItemListViewStateInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  handle() {
    const query = this.searchItemsQueryRepository.get();
    const items = this.itemRepository.search(query);
    this.support.debug('items: ', items);
    this.support.debug('query: ', query);
    if (items.err) {
      this.support.error('search items is failed. err:', items.err);
      return false;
    }
    this.support.debug("search items: ", items, query);
    this.itemListState.setItems(items.data);
  }
}
