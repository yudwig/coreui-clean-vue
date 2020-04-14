import {CreateSearchItemsQueryUseCase} from "./CreateSearchItemsQueryUseCase";
import {ItemSearchQuery} from "../../../queries/ItemList/ItemSearchQuery";
import {SearchItemsQueryRepositoryInterface} from "../../../repositories/SearchItemsQuery/SearchItemsQueryRepositoryInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class CreateSearchItemsQueryInteractor implements CreateSearchItemsQueryUseCase {

  private searchItemsQueryRepository: SearchItemsQueryRepositoryInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    searchItemsQueryRepository: SearchItemsQueryRepositoryInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public handle(): ItemSearchQuery {
    return this.searchItemsQueryRepository.get();
  }
}