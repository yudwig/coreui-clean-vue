export class GetItemsQuery {
    readonly index;
    readonly count;
    constructor(query: {
        index: number,
        count: number
    }) {
        this.index = query.index;
        this.count = query.count;
    }
}
