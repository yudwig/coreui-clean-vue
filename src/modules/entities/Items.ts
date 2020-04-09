import {Item} from "./Item";

export class Items {
  private list: Item[];

  constructor(items: Item[]) {
    this.list = items;
  }

  public getList() {
    return this.list ? this.list : [];
  }
}