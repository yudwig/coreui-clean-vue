import {GetItemsQueryRepositoryInterface} from "./GetItemsQueryRepositoryInterface";
import {GetItemsQuery} from "../../entities/GetItemsQuery";

export class MockGetItemsQueryRepository implements GetItemsQueryRepositoryInterface {
    get(): GetItemsQuery {
        return new GetItemsQuery({
            count: 0,
            index: 0
        });
    }
}