import {GetItemsResponse} from "../../entities/GetItemsResponse";
import {GetItemsQuery} from "../../entities/GetItemsQuery";

export interface GetItemsUseCase {
    handle(getItemsQuery: GetItemsQuery): GetItemsResponse;
}
