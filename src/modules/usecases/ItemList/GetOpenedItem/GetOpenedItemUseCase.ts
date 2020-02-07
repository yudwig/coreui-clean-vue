import {Item} from "../../../entities/Item";

export interface GetOpenedItemUseCase {
    handle(): Item;
}