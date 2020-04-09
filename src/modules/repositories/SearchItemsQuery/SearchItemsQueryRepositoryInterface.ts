import {ItemSearchQuery} from "../../queries/ItemList/ItemSearchQuery";

export interface SearchItemsQueryRepositoryInterface {
  get(): ItemSearchQuery;
}