interface OutputInterface {
    data: object,
    err: Error
}

export interface DocumentStorageInterface {
    write(namespace: string, key: string, value: object): OutputInterface;
    read(namespace: string, key: string): OutputInterface;
    delete(namespace: string, key: string): OutputInterface;
    merge(namespace: string, key: string, value: object): OutputInterface;
}
