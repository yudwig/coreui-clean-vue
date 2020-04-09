export interface WebStorageInterface {
  setItem(key: string, val: string);
  getItem(key: string): string;
}