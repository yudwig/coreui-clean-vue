import {WebStorageInterface} from "./WebStorageInterface";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";

export class SessionStorage implements WebStorageInterface {

  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  getItem(key: string): string {
    return sessionStorage.getItem(key);
  }

  setItem(key: string, val: string) {
    sessionStorage.setItem(key, val);
  }
}