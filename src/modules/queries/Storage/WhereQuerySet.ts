import {WhereQuerySubset} from "./WhereQuerySubset";

export class WhereQuerySet {

  private subsets: WhereQuerySubset[];

  constructor(whereQuerySubsets: WhereQuerySubset[]) {
    this.subsets = whereQuerySubsets ? whereQuerySubsets : [];
  }

  public getSubsets() {
    return this.subsets;
  }

  public addSubset(whereQuerySubset: WhereQuerySubset) {
    this.subsets.push(whereQuerySubset);
  }
}