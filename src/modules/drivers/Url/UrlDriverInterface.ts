import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {ModuleCommandResponse} from "../../entities/ModuleCommandResponse";

export interface UrlDriverInterface {
  read(): ModuleQueryResponse<string>;
  write(url: string): ModuleCommandResponse;
  push(url: string): ModuleCommandResponse;
  pop(): ModuleCommandResponse;
}