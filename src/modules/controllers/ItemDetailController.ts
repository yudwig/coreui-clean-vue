import {GetItemUseCase} from "../usecases/ItemDetail/GetItem/GetItemUseCase";
import {GetItemInteractor} from "../usecases/ItemDetail/GetItem/GetItemInteractor";
import {MockItemRepository} from "../repositories/Item/MockItemRepository";
import {Item} from "../entities/Item";

export class ItemDetailController {

    private getItemUseCase: GetItemUseCase;

    constructor() {
        this.getItemUseCase = new GetItemInteractor(
            new MockItemRepository()
        );
    }

    public getItem(id: number): Item {
        return this.getItemUseCase.handle(id);
    }
}