import {OpenItemDetailUseCase} from "./OpenItemDetailUseCase";
import {ItemListStoreInterface} from "../../stores/ItemListStoreInterface";
import {VuexItemListStoreAdaptor} from "../../../vue/stores/VuexItemListStoreAdaptor";
import {ItemRepositoryInterface} from "../../repositories/Item/ItemRepositoryInterface";
import {MockItemRepository} from "../../repositories/Item/MockItemRepository";

export class OpenItemDetailInteractor implements OpenItemDetailUseCase {

    private itemListStore: ItemListStoreInterface;
    private itemRepository: ItemRepositoryInterface;

    constructor() {
        this.itemListStore = new VuexItemListStoreAdaptor();
        this.itemRepository = new MockItemRepository();
    }

    public handle(id: number) {
        const item = this.itemRepository.find(id);
        this.itemListStore.setOpenedItem(item);
        window.history.pushState(null, null, '/item/' + id);
    }
}