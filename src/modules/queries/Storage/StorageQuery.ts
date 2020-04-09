import {SelectQuery} from "./SelectQuery";
import {LimitQuery} from "./LimitQuery";
import {WhereQuerySet} from "./WhereQuerySet";
import {SortQueries} from "./SortQueries";
import {OffsetQuery} from "./OffsetQuery";

export class StorageQuery {
  readonly selectQuery: SelectQuery;
  readonly whereQuerySet: WhereQuerySet;
  readonly sortQueries: SortQueries;
  readonly offsetQuery: OffsetQuery;
  readonly limitQuery: LimitQuery;

  constructor(
    selectQuery: SelectQuery,
    whereQuerySet: WhereQuerySet,
    sortQueries: SortQueries,
    offsetQuery: OffsetQuery,
    limitQuery: LimitQuery
  ) {
    this.selectQuery = selectQuery;
    this.whereQuerySet = whereQuerySet;
    this.sortQueries = sortQueries;
    this.offsetQuery = offsetQuery;
    this.limitQuery = limitQuery;
  }
}
