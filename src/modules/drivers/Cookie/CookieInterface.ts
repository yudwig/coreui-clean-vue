export interface CookieOptionInterface {
  domain?: string,
  expires?: number,
  path?: string
}

export interface CookieInterface {
  set(key: string, val: string, options: CookieOptionInterface);
  get(key: string): string;
  remove(key: string);
}