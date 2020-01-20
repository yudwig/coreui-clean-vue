import {GetItemsUseCase} from "./GetItemsUseCase";
import {GetItemsResponse} from "../../entities/GetItemsResponse";
import {ItemRepositoryInterface} from "../../repositories/item/ItemRepositoryInterface";
import {GetItemsQuery} from "../../entities/GetItemsQuery";
import {HttpResponse} from "../../entities/HttpResponse";
import {StatusCode} from "../../entities/StatusCode";

export class MockGetItemsInteractor implements GetItemsUseCase {

    private itemRepository: ItemRepositoryInterface;

    constructor(itemRepository: ItemRepositoryInterface) {
        this.itemRepository = itemRepository;
    }

    handle(getItemsQuery: GetItemsQuery): GetItemsResponse {
        return new GetItemsResponse(
            this.itemRepository.search(getItemsQuery),
            new HttpResponse({
                headers: {},
                statusCode: StatusCode.ok,
                statusText: ""
            })
        );
    }
}
