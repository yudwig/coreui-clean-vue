import {Item} from "../../entities/Item";

export interface OpenItemDetailUseCase {
    handle(item: Item);
}
