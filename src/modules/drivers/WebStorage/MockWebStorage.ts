import {WebStorageInterface} from "./WebStorageInterface";

export class MockWebStorage implements WebStorageInterface {

  private storage;

  constructor() {
    this.storage = {};
  }

  getItem(key: string): string {
    return this.storage[key];
  }

  setItem(key: string, val: string) {
    this.storage[key] = val;
  }
}