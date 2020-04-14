import {ModuleCommandResponse} from "../../entities/ModuleCommandResponse";

export interface RouterDriverInterface {
  push(url: string): ModuleCommandResponse;
  pop(): ModuleCommandResponse;
  replace(url: string): ModuleCommandResponse;
}