export enum SortOrder {
  ASC,
  DESC
}

export class SortQuery {

  readonly column: string;
  readonly order: SortOrder;

  constructor(order: SortOrder, column: string) {
    this.column = column;
    this.order = order;
  }
}