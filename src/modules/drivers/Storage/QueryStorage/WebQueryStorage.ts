import {QueryStorageInterface} from "./QueryStorageInterface";
import {StorageQuery} from "../../../queries/Storage/StorageQuery";
import {Operator, WhereQueryElement} from "../../../queries/Storage/WhereQueryElement";
import {WhereQuerySubset} from "../../../queries/Storage/WhereQuerySubset";
import {WebStorageInterface} from "../../WebStorage/WebStorageInterface";
import {ModuleQueryResponse} from "../../../entities/ModuleQueryResponse";
import {SortQueries} from "../../../queries/Storage/SortQueries";
import {SortOrder, SortQuery} from "../../../queries/Storage/SortQuery";

export class WebQueryStorage implements QueryStorageInterface {

  private storage: WebStorageInterface;

  constructor(webStorage: WebStorageInterface) {
    this.storage = webStorage;
  }

  public create(namespace: string, data: object) {
    let items;
    try {
      const json = this.storage.getItem(namespace);
      items = json ? JSON.parse(json) : [];
      items.push(data);
      this.storage.setItem(namespace, JSON.stringify(items));
    } catch (e) {
      return {data: null, err: e};
    }
    return {data: null, err: null};
  }

  public delete(query: StorageQuery) {
    const items = this.getItems(query.selectQuery.namespace);
    if (items.err) {
      return {data: null, err: items.err};
    }
    const result = this.execSearch(items, query);
    this.storage.setItem(query.selectQuery.namespace, JSON.stringify(result.unmatched));
    return {data: null, err: null};
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

  public search(query: StorageQuery) {
    const items = this.getItems(query.selectQuery.namespace);
    if (items.err) {
      // return {data: null, err: items.err};
      return new ModuleQueryResponse(null, items.err);
    }
    const searchResult = this.execSearch(items, query);
    const sorted = this.multiKeySort(searchResult.matched, query.sortQueries.list()) ;
    const limit = query.limitQuery ? query.offsetQuery.count + query.limitQuery.count : Infinity;
    const sliced = sorted.slice(query.offsetQuery.count, limit);
    return new ModuleQueryResponse(sliced);
  }

  private getItems(namespace: string) {
    let items;
    try {
      const json = this.storage.getItem(namespace);
      items = json ? JSON.parse(json) : [];
    } catch (e) {
      return {data: null, err: e};
    }
    return items;
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

  public update(query: StorageQuery, data: object) {
    const items = this.getItems(query.selectQuery.namespace);
    if (items.err) {
      return {data: null, err: items.err};
    }
    const result = this.execSearch(items, query);
    const updated = result.matched.map(item => Object.assign(item, data));
    const newItems = result.unmatched.concat(updated);
    this.storage.setItem(query.selectQuery.namespace, JSON.stringify(newItems));
    return {data: null, err: null};
  }

  public isset(namespace: string) {
    const item = this.storage.getItem(namespace);
    return Boolean(item);
  }
}