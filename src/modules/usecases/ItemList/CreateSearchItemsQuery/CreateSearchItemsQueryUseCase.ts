import {ItemSearchQuery} from "../../../queries/ItemList/ItemSearchQuery";

export interface CreateSearchItemsQueryUseCase {
  handle(): ItemSearchQuery;
}