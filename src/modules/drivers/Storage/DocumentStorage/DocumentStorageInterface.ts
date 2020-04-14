import {ModuleCommandResponse} from "../../../entities/ModuleCommandResponse";
import {ModuleQueryResponse} from "../../../entities/ModuleQueryResponse";

export interface DocumentStorageInterface {
  write(namespace: string, key: string, value: object): ModuleCommandResponse;
  read(namespace: string, key: string): ModuleQueryResponse<object>;
  delete(namespace: string, key: string): ModuleCommandResponse;
  merge(namespace: string, key: string, value: object): ModuleCommandResponse;
}
