import {ClientStorageDriverInterface} from "./ClientStorageDriverInterface";

export class UrlQueryStringDriver implements ClientStorageDriverInterface {
    find(key: string): string {
        return "";
    }

    read(): object {
        return undefined;
    }

    write(data: object): boolean {
        return false;
    }

    merge(data: object): boolean {
        return false;
    }
}