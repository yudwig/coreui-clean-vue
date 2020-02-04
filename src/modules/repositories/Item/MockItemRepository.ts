import {ItemRepositoryInterface} from "./ItemRepositoryInterface";
import {Item} from "../../entities/Item";
import {GetItemsQuery} from "../../entities/GetItemsQuery";
const dbItems = [
    {
        id: 1,
        title: 'A City Park',
        imageUrl: 'http://localhost:3000/images/1968.88 - A City Park.jpeg',
        updatedAt: 1579152589,
        createdAt: 1578963600
    },
    {
        id: 2,
        title: 'Paris Street; Rainy Day',
        imageUrl: 'http://localhost:3000/images/1964.336 - Paris Street; Rainy Day.jpeg',
        updatedAt: 1579152589,
        createdAt: 1578963600
    },
    {
        id: 3,
        title: 'Seascape',
        imageUrl: 'http://localhost:3000/images/1922.438 - Seascape.jpeg',
        updatedAt: 1579152589,
        createdAt: 1578963600
    },
    {
        id: 4,
        title: 'The Bathers',
        imageUrl: 'http://localhost:3000/images/1942.457 - The Bathers.jpeg',
        updatedAt: 1579152589,
        createdAt: 1578963600
    },
    {
        id: 5,
        title: 'Fruits of the Midi',
        imageUrl: 'http://localhost:3000/images/1933.1176 - Fruits of the Midi.jpeg',
        updatedAt: 1579152589,
        createdAt: 1578963600
    },
];

export class MockItemRepository implements ItemRepositoryInterface{
    find(id: number): Item {
        let item = dbItems.find(i => i.id === id);
        return new Item({
            createdAt: item.createdAt,
            id: item.id,
            imageUrl: item.imageUrl,
            title: item.title,
            updatedAt: item.updatedAt
        });
    }
    search(query: GetItemsQuery): Array<Item> {
        return dbItems.map(item => new Item({
            createdAt: item.createdAt,
            id: item.id,
            imageUrl: item.imageUrl,
            title: item.title,
            updatedAt: item.updatedAt})
        );
    }
}