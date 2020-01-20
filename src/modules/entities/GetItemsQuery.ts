export class GetItemsQuery {
    readonly index: number;
    readonly count: number;
    constructor(query: {
        index: number,
        count: number
    }) {
        this.index = query.index;
        this.count = query.count;
    }
}
