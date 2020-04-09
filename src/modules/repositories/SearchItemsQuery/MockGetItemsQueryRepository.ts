import {SearchItemsQueryRepositoryInterface} from "./SearchItemsQueryRepositoryInterface";
import {ItemSearchQuery} from "../../queries/ItemList/ItemSearchQuery";

export class MockGetItemsQueryRepository implements SearchItemsQueryRepositoryInterface {
  get(): ItemSearchQuery {
    return new ItemSearchQuery({
      count: 10,
      index: 0
    });
  }
}