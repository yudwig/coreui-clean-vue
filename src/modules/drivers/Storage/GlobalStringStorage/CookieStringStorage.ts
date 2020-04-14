import {GlobalStringStorageInterface} from "./GlobalStringStorageInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";
import {ModuleCommandResponse} from "../../../entities/ModuleCommandResponse";
import {ModuleQueryResponse} from "../../../entities/ModuleQueryResponse";

export class CookieStringStorage implements GlobalStringStorageInterface {

  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  delete(key: string): ModuleCommandResponse {
    return undefined;
  }

  read(key: string): ModuleQueryResponse<string> {
    return undefined;
  }

  write(key: string, value: string): ModuleCommandResponse {
    return undefined;
  }
}