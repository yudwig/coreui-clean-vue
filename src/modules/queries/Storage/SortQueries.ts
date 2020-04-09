import {SortQuery} from "./SortQuery";

export class SortQueries {

  private queries: SortQuery[];

  constructor() {
    this.queries = [];
  }

  public add(sortQuery: SortQuery) {
    this.queries.push(sortQuery);
  }

  public pop() {
    return this.queries.shift();
  }

  public list() {
    return this.queries;
  }
}