import {Item} from "../../../entities/Item";

export interface GetItemUseCase {
    handle(id: number): Item;
}