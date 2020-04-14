import {ModuleCommandResponse} from "../../modules/entities/ModuleCommandResponse";
import {router} from '../app/router';
import {ModuleSupportInterface} from "../../modules/supports/ModuleSupportInterface";
import {RouterDriverInterface} from "../../modules/drivers/Router/RouterDriverInterface";

export class VueRouterDriver implements RouterDriverInterface {

  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  pop(): ModuleCommandResponse {
    try {
      router.go(-1);
    } catch (e) {
      return new ModuleCommandResponse(e);
    }
    return new ModuleCommandResponse(null);
  }

  push(url: string): ModuleCommandResponse {
    try {
      router.push(url);
    } catch (e) {
      return new ModuleCommandResponse(e);
    }
    return new ModuleCommandResponse(null);
  }

  replace(url: string): ModuleCommandResponse {
    try {
      router.replace(url).catch(() => {});
    } catch (e) {
      return new ModuleCommandResponse(e);
    }
    return new ModuleCommandResponse( null);
  }
}