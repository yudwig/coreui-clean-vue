import {SearchItemsQueryRepositoryInterface} from "./SearchItemsQueryRepositoryInterface";
import {ItemSearchQuery} from "../../queries/ItemList/ItemSearchQuery";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";

export class MockGetItemsQueryRepository implements SearchItemsQueryRepositoryInterface {

  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  get(): ItemSearchQuery {
    return new ItemSearchQuery({
      count: 10,
      index: 0
    });
  }
}