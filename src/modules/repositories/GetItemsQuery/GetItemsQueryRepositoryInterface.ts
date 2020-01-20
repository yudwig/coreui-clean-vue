import {GetItemsQuery} from "../../entities/GetItemsQuery";

export interface GetItemsQueryRepositoryInterface {
    get(): GetItemsQuery;
}