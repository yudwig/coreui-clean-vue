import {GetItemsQuery} from "../../../entities/GetItemsQuery";

export interface CreateGetItemsQueryUseCase {
    handle(): GetItemsQuery;
}