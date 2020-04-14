import {UrlDriverInterface} from "./UrlDriverInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {ModuleCommandResponse} from "../../entities/ModuleCommandResponse";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";

export class HistoryUrlDriver implements UrlDriverInterface {

  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
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
      history.replaceState(null, null, url);
    } catch (e) {
      return new ModuleCommandResponse(e);
    }
    return new ModuleCommandResponse( null);
  }

  pop(): ModuleCommandResponse {
    try {
      this.support.debug('back is called.');
      history.back();
    } catch (e) {
      this.support.debug('back error.', e);
      return new ModuleCommandResponse(e);
    }
    return new ModuleCommandResponse(null);
  }

  push(url: string): ModuleCommandResponse {
    this.support.debug('url: ', url);
    try {
      history.pushState(null, null, url);
    } catch (e) {
      this.support.error(e);
      return new ModuleCommandResponse(e);
    }
    return new ModuleCommandResponse(null);
  }
}