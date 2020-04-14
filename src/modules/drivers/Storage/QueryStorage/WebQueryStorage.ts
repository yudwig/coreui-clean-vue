import {QueryStorageInterface} from "./QueryStorageInterface";
import {StorageQuery} from "../../../queries/Storage/StorageQuery";
import {Operator, WhereQueryElement} from "../../../queries/Storage/WhereQueryElement";
import {WhereQuerySubset} from "../../../queries/Storage/WhereQuerySubset";
import {WebStorageInterface} from "../../WebStorage/WebStorageInterface";
import {ModuleQueryResponse} from "../../../entities/ModuleQueryResponse";
import {SortOrder, SortQuery} from "../../../queries/Storage/SortQuery";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";
import {ModuleCommandResponse} from "../../../entities/ModuleCommandResponse";

export class WebQueryStorage implements QueryStorageInterface {

  private storage: WebStorageInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    storage: WebStorageInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public create(namespace: string, data: object): ModuleCommandResponse {
    let items;
    try {
      const json = this.storage.getItem(namespace);
      items = json ? JSON.parse(json) : [];
      items.push(data);
      this.storage.setItem(namespace, JSON.stringify(items));
    } catch (e) {
      return new ModuleCommandResponse(e);
    }
    return new ModuleCommandResponse(null);
  }

  public delete(query: StorageQuery): ModuleCommandResponse {
    const items = this.getItems(query.selectQuery.namespace);
    if (items.err) {
      return new ModuleCommandResponse(items.err);
    }
    const result = this.execSearch(items.data, query);
    this.storage.setItem(query.selectQuery.namespace, JSON.stringify(result.unmatched));
    return new ModuleCommandResponse(null);
  }

  private multiKeySort(arr: any[], sortQueries: SortQuery[]) {
    return arr.sort((a: any, b: any) => {
      const key = sortQueries.find(sortQuery => {
        return a[sortQuery.column] != b[sortQuery.column];
      });
      if (!key) {
        return 0;
      }
      if (key.order == SortOrder.ASC) {
        return a[key.column] > b[key.column] ? 1 : -1;
      } else {
        return a[key.column] < b[key.column] ? 1 : -1;
      }
    });
  }

  public search(query: StorageQuery): ModuleQueryResponse<object[]> {
    const items = this.getItems(query.selectQuery.namespace);
    if (items.err) {
      return new ModuleQueryResponse(null, items.err);
    }
    const searchResult = this.execSearch(items.data, query);
    const sorted = this.multiKeySort(searchResult.matched, query.sortQueries.list()) ;
    const limit = query.limitQuery ? query.offsetQuery.count + query.limitQuery.count : Infinity;
    const sliced = sorted.slice(query.offsetQuery.count, limit);
    return new ModuleQueryResponse(sliced);
  }

  private getItems(namespace: string): ModuleQueryResponse<object[]> {
    let items;
    try {
      const json = this.storage.getItem(namespace);
      items = json ? JSON.parse(json) : [];
    } catch (e) {
      return new ModuleQueryResponse<object[]>(null, e);
    }
    return new ModuleQueryResponse<object[]>(items);
  }

  private execSearch(items, query: StorageQuery) {
    const intersectionsOf = query.whereQuerySet.getSubsets().map(subset => this.createIsIntersectionOf(subset));
    const matched = [], unmatched = [];
    items.forEach(
      item => {
        if (intersectionsOf.some(intersectionOf => intersectionOf(item))) {
          matched.push(item);
        } else {
          unmatched.push(item);
        }
      }
    );
    return {
      matched: matched,
      unmatched: unmatched
    }
  }

  private createIsIntersectionOf(query: WhereQuerySubset) {
    const isSubsetsOf = query.getElements().map(elm => this.createIsSubsetOf(elm));
    return function(item) {
      return isSubsetsOf.every(isSubsetOf => isSubsetOf(item));
    }
  }

  private createIsSubsetOf(query: WhereQueryElement) {
    return function(elm) {
      switch(query.operator) {
        case Operator['<']:
          return elm[query.column] < query.value;
        case Operator['>']:
          return elm[query.column] > query.value;
        case Operator['=']:
          return elm[query.column] == query.value;
        case Operator['<=']:
          return elm[query.column] <= query.value;
        case Operator['>=']:
          return elm[query.column] >= query.value;
        case Operator['!=']:
          return elm[query.column] != query.value;
        default:
          throw Error('Not defined operator: ' + query.operator);
      }
    }
  }

  public update(query: StorageQuery, data: object): ModuleCommandResponse {
    const items = this.getItems(query.selectQuery.namespace);
    if (items.err) {
      return new ModuleCommandResponse(items.err);
    }
    const result = this.execSearch(items.data, query);
    const updated = result.matched.map(item => Object.assign(item, data));
    const newItems = result.unmatched.concat(updated);
    this.storage.setItem(query.selectQuery.namespace, JSON.stringify(newItems));
    return new ModuleCommandResponse(null);
  }

  public isset(namespace: string): ModuleQueryResponse<boolean>  {
    const item = this.storage.getItem(namespace);
    return new ModuleQueryResponse<boolean>(Boolean(item));
  }
}