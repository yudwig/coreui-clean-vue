import {UrlDriverInterface} from "../../modules/drivers/Url/UrlDriverInterface";
import {ModuleCommandResponse} from "../../modules/entities/ModuleCommandResponse";
import {ModuleQueryResponse} from "../../modules/entities/ModuleQueryResponse";
import {router} from '../app/router';

export class VueRouterUrlDriver implements UrlDriverInterface {

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

  read(): ModuleQueryResponse<string> {
    let url: string;
    try {
      url = location.href;
    } catch (e) {
      return new ModuleQueryResponse<string>(null, e);
    }
    return new ModuleQueryResponse<string>(url);
  }

  write(url: string): ModuleCommandResponse {
    try {
      router.replace(url).catch(() => {});
    } catch (e) {
      return new ModuleCommandResponse(e);
    }
    return new ModuleCommandResponse( null);
  }
}