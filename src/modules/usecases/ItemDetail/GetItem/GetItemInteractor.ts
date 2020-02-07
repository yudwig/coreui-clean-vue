import {GetItemUseCase} from "./GetItemUseCase";
import {Item} from "../../../entities/Item";
import {ItemRepositoryInterface} from "../../../repositories/Item/ItemRepositoryInterface";

export class GetItemInteractor implements GetItemUseCase {

    private itemRepository: ItemRepositoryInterface;

    constructor(itemRepository: ItemRepositoryInterface) {
        this.itemRepository = itemRepository;
    }

    handle(id: number): Item {
        return this.itemRepository.find(id);
    }
}