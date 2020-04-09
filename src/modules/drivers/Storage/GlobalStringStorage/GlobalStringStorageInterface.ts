interface OutputInterface {
    data: string,
    err: Error
}

export interface GlobalStringStorageInterface {
    write(key: string, value: string): OutputInterface;
    read(key: string): OutputInterface;
    delete(key: string): OutputInterface;
}