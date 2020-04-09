import {StorageQueryBuilderInterface} from "./StorageQueryBuilderInterface";
import {SelectQuery} from "./SelectQuery";
import {SortOrder, SortQuery} from "./SortQuery";
import {LimitQuery} from "./LimitQuery";
import {StorageQuery} from "./StorageQuery";
import {WhereQuerySubset} from "./WhereQuerySubset";
import {WhereQueryElement} from "./WhereQueryElement";
import {WhereQuerySet} from "./WhereQuerySet";
import {SortQueries} from "./SortQueries";
import {OffsetQuery} from "./OffsetQuery";

export class StorageQueryBuilder implements StorageQueryBuilderInterface {

  private whereQuerySet: WhereQuerySet = null;
  private selectQuery: SelectQuery = null;
  private sortQueries: SortQueries = null;
  private limitQuery: LimitQuery = null;
  private offsetQuery: OffsetQuery = null;

  constructor() {
    this.whereQuerySet = new WhereQuerySet(null);
    this.sortQueries = new SortQueries();
    this.offset(0);
  }

  public selectFrom(namespace: string) {
    this.selectQuery = new SelectQuery(namespace);
    return this;
  }

  public where(...queries: string[]) {
    const elements = queries.map(query => {
      const args = query.trim().replace(/\s+/g, ',').split(',');
      return new WhereQueryElement(args[0], args[1], args[2]);
    });
    const subset = new WhereQuerySubset(elements);
    this.whereQuerySet.addSubset(subset);
    return this;
  }

  public ascSort(column: string) {
    const query = new SortQuery(SortOrder.ASC, column);
    this.sortQueries.add(query);
    return this;
  }

  public descSort(column: string) {
    const query = new SortQuery(SortOrder.DESC, column);
    this.sortQueries.add(query);
    return this;
  }

  public offset(count: number) {
    this.offsetQuery = new OffsetQuery(count);
    return this;
  }

  public limit(count: number) {
    this.limitQuery = new LimitQuery(count);
    return this;
  }

  public all() {
    return this.where('constructor != _');
  }

  public build(): StorageQuery {
    return new StorageQuery(
      this.selectQuery,
      this.whereQuerySet,
      this.sortQueries,
      this.offsetQuery,
      this.limitQuery
    );
  }
}
