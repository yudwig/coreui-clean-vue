export class Item {
    readonly id: number;
    readonly title: string;
    readonly imageUrl: string;
    readonly createdAt: number;
    readonly updatedAt: number;

    constructor(item: Required<Item>) {
        this.id = item.id;
        this.title = item.title;
        this.imageUrl = item.imageUrl;
        this.createdAt = item.createdAt;
        this.updatedAt = item.updatedAt;
    }
}
