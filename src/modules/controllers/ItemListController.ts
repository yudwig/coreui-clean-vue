import {VuexItemListStoreAdaptor} from "../../vue/stores/VuexItemListStoreAdaptor";
import {ItemListStoreInterface} from "../stores/ItemListStoreInterface";
import {CreateGetItemsQueryUseCase} from "../usecases/CreateGetItemsQuery/CreateGetItemsQueryUseCase";
import {CreateGetItemsQueryInteractor} from "../usecases/CreateGetItemsQuery/CreateGetItemsQueryInteractor";
import {MockGetItemsQueryRepository} from "../repositories/GetItemsQuery/MockGetItemsQueryRepository";
import {GetItemsUseCase} from "../usecases/GetItems/GetItemsUseCase";
import {MockGetItemsInteractor} from "../usecases/GetItems/MockGetItemsInteractor";
import {MockItemRepository} from "../repositories/Item/MockItemRepository";
import {OpenItemDetailUseCase} from "../usecases/OpenItemDetail/OpenItemDetailUseCase";
import {CloseItemDetailUseCase} from "../usecases/CloseItemDetail/CloseItemDetailUseCase";
import {GetOpenedItemUseCase} from "../usecases/GetOpenedItem/GetOpenedItemUseCase";
import {OpenItemDetailInteractor} from "../usecases/OpenItemDetail/OpenItemDetailInteractor";
import {CloseItemDetailInteractor} from "../usecases/CloseItemDetail/CloseItemDetailInteractor";
import {GetOpenedItemInteractor} from "../usecases/GetOpenedItem/GetOpenedItemInteractor";
import {ReplaceCloseItemDetailInteractor} from "../usecases/CloseItemDetail/ReplaceCloseItemDetailInteractor";
import {BackCloseItemDetailInteractor} from "../usecases/CloseItemDetail/BackCloseItemDetailInteractor";

export class ItemListController {

    private itemListStore: ItemListStoreInterface;
    private createGetItemsQueryUseCase: CreateGetItemsQueryUseCase;
    private getItemsUseCase: GetItemsUseCase;

    private openItemDetailUseCase: OpenItemDetailUseCase;
    private closeButtonClickedUseCase: CloseItemDetailUseCase;
    private popStateUseCase: CloseItemDetailUseCase;
    private getOpenedItemUseCase: GetOpenedItemUseCase;

    constructor() {
        this.itemListStore = new VuexItemListStoreAdaptor();
        this.createGetItemsQueryUseCase = new CreateGetItemsQueryInteractor(
            new MockGetItemsQueryRepository()
        );
        this.getItemsUseCase = new MockGetItemsInteractor(
            new MockItemRepository()
        );
        this.openItemDetailUseCase = new OpenItemDetailInteractor();
        this.closeButtonClickedUseCase = new ReplaceCloseItemDetailInteractor();
        this.popStateUseCase = new CloseItemDetailInteractor();
        this.getOpenedItemUseCase = new GetOpenedItemInteractor();
    }

    public addEvents() {
        console.log('controller::addEvents is called.');
        // window.addEventListener('popstate', this.popStateCallback, false);
        window.addEventListener('popstate', () => this.popStateCallback(), true);
    }

    public removeEvents() {
        console.log('controller::removeEvents is called.');
        // window.removeEventListener('popstate', () => this.closeItem(), false);
        window.removeEventListener('popstate', () => this.popStateCallback(), true);
    }

    private popStateCallback() {
        console.log('controller::popstate is called.');
        // history.pushState(null, null, null);
        this.popStateUseCase.handle();
    }

    public getItems() {
        console.log('controller::getItems is called.');
        const getItemsQuery = this.createGetItemsQueryUseCase.handle();
        const response = this.getItemsUseCase.handle(getItemsQuery);
        return response.items;
    }

    public getOpenedItem() {
        console.log('controller::getOpenedItem is called.');
        return this.getOpenedItemUseCase.handle();
    }

    public openItem(id: number) {
        console.log('controller::openItem is called.');
        this.openItemDetailUseCase.handle(id);
    }

    public closeItem() {
        console.log('controller::closeItem is called.');
        this.closeButtonClickedUseCase.handle();
    }
}
