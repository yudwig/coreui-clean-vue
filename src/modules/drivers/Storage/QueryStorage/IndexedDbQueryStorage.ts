import {QueryStorageInterface} from "./QueryStorageInterface";
import {StorageQuery} from "../../../queries/Storage/StorageQuery";
import {Dexie} from "dexie";

export class IndexedDbQueryStorage implements QueryStorageInterface {
  create(namespace: string, data: object) {

    return undefined;
  }

  delete(query: StorageQuery) {
    return undefined;
  }

  search(query: StorageQuery) {
    return undefined;
  }

  update(query: StorageQuery, data: object) {
    return undefined;
  }

  isset(namespace: string) {
  }
}