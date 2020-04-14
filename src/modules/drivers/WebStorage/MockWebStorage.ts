import {WebStorageInterface} from "./WebStorageInterface";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";

export class MockWebStorage implements WebStorageInterface {

  private storage: {};
  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
    this.storage = {};
  }

  getItem(key: string): string {
    return this.storage[key];
  }

  setItem(key: string, val: string) {
    this.storage[key] = val;
  }
}