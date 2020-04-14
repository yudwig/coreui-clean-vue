import {DocumentStorageInterface} from "./DocumentStorageInterface";
import {CookieInterface} from "../../Cookie/CookieInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";
import {ModuleCommandResponse} from "../../../entities/ModuleCommandResponse";
import {ModuleQueryResponse} from "../../../entities/ModuleQueryResponse";

export class CookieDocumentStorage implements DocumentStorageInterface {

  private cookie: CookieInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    cookie: CookieInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public delete(namespace: string, key: string): ModuleCommandResponse {
    try {
      this.cookie.remove(key);
    } catch(e) {
      return new ModuleCommandResponse(e);
    }
    return new ModuleCommandResponse(null);
  }

  public merge(namespace: string, key: string, value: object): ModuleCommandResponse {
    return undefined;
  }

  public read(namespace: string, key: string): ModuleQueryResponse<object> {
    let val;
    try {
      val = this.cookie.get(key);
    } catch(e) {
      return new ModuleQueryResponse<object>(null, e);
    }
    if (!val) {
      return new ModuleQueryResponse<object>(null, null);
    }
    let json;
    try {
      json = JSON.parse(val);
    } catch(e) {
      return new ModuleQueryResponse<object>(null, e);
    }
    return new ModuleQueryResponse<object>(json);
  }

  public write(namespace: string, key: string, value: object): ModuleCommandResponse {
    let json;
    try {
      json = JSON.stringify(value);
      this.cookie.set(key, json, null);
    } catch(e) {
      return new ModuleCommandResponse(e);
    }
    return new ModuleCommandResponse(null);
  }
}