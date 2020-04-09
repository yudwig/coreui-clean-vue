import {CreateSearchItemsQueryUseCase} from "./CreateSearchItemsQueryUseCase";
import {ItemSearchQuery} from "../../../queries/ItemList/ItemSearchQuery";
import {SearchItemsQueryRepositoryInterface} from "../../../repositories/SearchItemsQuery/SearchItemsQueryRepositoryInterface";

export class CreateSearchItemsQueryInteractor implements CreateSearchItemsQueryUseCase {

  private getItemsQueryRepository: SearchItemsQueryRepositoryInterface;

  constructor(getItemsQueryRepository: SearchItemsQueryRepositoryInterface) {
    this.getItemsQueryRepository = getItemsQueryRepository;
  }

  public handle(): ItemSearchQuery {
    return this.getItemsQueryRepository.get();
  }
}