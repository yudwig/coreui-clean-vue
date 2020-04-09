import {UrlDriverInterface} from "./UrlDriverInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {ModuleCommandResponse} from "../../entities/ModuleCommandResponse";

export class HistoryUrlDriver implements UrlDriverInterface {

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
      history.replaceState(null, null, url);
    } catch (e) {
      return new ModuleCommandResponse(e);
    }
    return new ModuleCommandResponse( null);
  }

  pop(): ModuleCommandResponse {
    try {
      history.back();
    } catch (e) {
      return new ModuleCommandResponse(e);
    }
    return new ModuleCommandResponse(null);
  }

  push(url: string): ModuleCommandResponse {
    try {
      history.pushState(null, null, url);
    } catch (e) {
      return new ModuleCommandResponse(e);
    }
    return new ModuleCommandResponse(null);
  }
}