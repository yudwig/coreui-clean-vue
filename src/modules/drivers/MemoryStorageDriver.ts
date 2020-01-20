import {ClientStorageDriverInterface} from "./ClientStorageDriverInterface";

class MemoryStorageDriver implements ClientStorageDriverInterface {

    private store;

    find(key: string): string {
        return this.store[key];
    }

    merge(data: object): boolean {
        // this.store = Object.assign(this.store, data);
        return true;
    }

    read(): object {
        return this.store;
    }

    write(data: object): boolean {
        this.store = data;
        return true;
    }
}