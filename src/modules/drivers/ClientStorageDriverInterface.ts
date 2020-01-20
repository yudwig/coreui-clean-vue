export interface ClientStorageDriverInterface {
    read(): object;
    write(data: object): boolean;
    merge(data: object): boolean;
    find(key: string): string;
}

