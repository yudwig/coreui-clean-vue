import {ModuleCommandResponse} from "../../../entities/ModuleCommandResponse";
import {ModuleQueryResponse} from "../../../entities/ModuleQueryResponse";

export interface GlobalStringStorageInterface {
    write(key: string, value: string): ModuleCommandResponse;
    read(key: string): ModuleQueryResponse<string>;
    delete(key: string): ModuleCommandResponse;
}