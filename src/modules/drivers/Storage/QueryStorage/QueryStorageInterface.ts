import {StorageQuery} from "../../../queries/Storage/StorageQuery";
import {ModuleQueryResponse} from "../../../entities/ModuleQueryResponse";

interface OutputInterface {
    data: object,
    err: Error
}


export interface QueryStorageInterface {
    create(namespace: string, data: object): OutputInterface;
    search(query: StorageQuery): ModuleQueryResponse<object[]>;
    update(query: StorageQuery, data: object): OutputInterface;
    delete(query: StorageQuery): OutputInterface;
    isset(namespace: string);
}