import {StorageQuery} from "./StorageQuery";

export interface StorageQueryBuilderInterface {
  selectFrom(namespace: string);
  where(...queries: string[]);
  offset(count: number);
  limit(count: number);
  ascSort(column: string);
  descSort(column: string);
  all();
  build(): StorageQuery;
}