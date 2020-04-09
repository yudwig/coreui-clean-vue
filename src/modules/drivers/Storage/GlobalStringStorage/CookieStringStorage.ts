import {GlobalStringStorageInterface} from "./GlobalStringStorageInterface";

export class CookieStringStorage implements GlobalStringStorageInterface {

    delete(key: string) {
        return undefined;
    }

    read(key: string) {
        return undefined;
    }

    write(key: string, value: string) {
        return undefined;
    }
}