import {StorageQuery} from "../../../queries/Storage/StorageQuery";
import {ModuleQueryResponse} from "../../../entities/ModuleQueryResponse";
import {ModuleCommandResponse} from "../../../entities/ModuleCommandResponse";

export interface QueryStorageInterface {
  create(namespace: string, data: object): ModuleCommandResponse;
  search(query: StorageQuery): ModuleQueryResponse<object[]>;
  update(query: StorageQuery, data: object): ModuleCommandResponse;
  delete(query: StorageQuery): ModuleCommandResponse;
  isset(namespace: string): ModuleQueryResponse<boolean>;
}