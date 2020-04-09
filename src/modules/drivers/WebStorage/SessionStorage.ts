import {WebStorageInterface} from "./WebStorageInterface";

export class SessionStorage implements WebStorageInterface {
  getItem(key: string): string {
    return sessionStorage.getItem(key);
  }

  setItem(key: string, val: string) {
    sessionStorage.setItem(key, val);
  }
}