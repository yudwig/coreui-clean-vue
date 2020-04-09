import {DocumentStorageInterface} from "./DocumentStorageInterface";
import {CookieInterface} from "../../Cookie/CookieInterface";
import {JsCookie} from "../../Cookie/JsCookie";

export class CookieDocumentStorage implements DocumentStorageInterface {

  private cookie: CookieInterface;

  constructor() {
    this.cookie = new JsCookie();
  }

  delete(namespace: string, key: string) {
    try {
      this.cookie.remove(key);
    } catch(e) {
      return {data: null, err: e};
    }
    return {data: null, err: null};
  }

  merge(namespace: string, key: string, value: object) {
    return undefined;
  }

  read(namespace: string, key: string) {
    let val;
    try {
      val = this.cookie.get(key);
    } catch(e) {
      return {data: null, err: e};
    }

    if (!val) {
      return {data: null, err: null};
    }

    let json;
    try {
      json = JSON.parse(val);
    } catch(e) {
      return {data: null, err: e};
    }

    return {
      data: json,
      err: null
    };
  }

  write(namespace: string, key: string, value: object) {
    let json;
    try {
      json = JSON.stringify(value);
      this.cookie.set(key, json, null);
    } catch(e) {
      return {data: null, err: e};
    }

    return {
      data: null,
      err: null
    };
  }
}