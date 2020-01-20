import {Item} from "./Item";
import {HttpResponse} from "./HttpResponse";

export class GetItemsResponse {
    readonly items: Array<Item>;
    readonly httpResponse: HttpResponse;

    constructor(items: Array<Item>, httpResponse: HttpResponse) {
        this.items = items;
        this.httpResponse = httpResponse;
    }
}