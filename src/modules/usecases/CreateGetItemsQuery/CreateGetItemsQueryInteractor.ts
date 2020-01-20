import {CreateGetItemsQueryUseCase} from "./CreateGetItemsQueryUseCase";
import {GetItemsQuery} from "../../entities/GetItemsQuery";
import {GetItemsQueryRepositoryInterface} from "../../repositories/GetItemsQuery/GetItemsQueryRepositoryInterface";

export class CreateGetItemsQueryInteractor implements CreateGetItemsQueryUseCase {

    private getItemsQueryRepository: GetItemsQueryRepositoryInterface;

    constructor(getItemsQueryRepository: GetItemsQueryRepositoryInterface) {
        this.getItemsQueryRepository = getItemsQueryRepository;
    }

    public handle(): GetItemsQuery {
        return this.getItemsQueryRepository.get();
    }
}