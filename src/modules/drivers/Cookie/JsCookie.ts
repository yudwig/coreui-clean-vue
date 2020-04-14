import {CookieInterface, CookieOptionInterface} from "./CookieInterface";
import Cookies from 'js-cookie/src/js.cookie.js';
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";

export class JsCookie implements CookieInterface {

  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  get(key: string): string {
    return Cookies.get(key);
  }

  remove(key: string) {
    Cookies.remove(key);
  }

  set(key: string, val: string, options: CookieOptionInterface) {
    Cookies.set(key, val, options);
  }
}