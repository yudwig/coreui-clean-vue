export enum Operator {
  '<',
  '>',
  '=',
  '<=',
  '>=',
  '!='
}

export class WhereQueryElement {

  readonly column: string;
  readonly operator: Operator;
  readonly value: string;

  constructor(column: string, operator: string, value: string) {
    this.column = column;
    this.value = value;
    switch(operator) {
      case '<': this.operator = Operator["<"]; break;
      case '>': this.operator = Operator[">"]; break;
      case '=': this.operator = Operator["="]; break;
      case '<=': this.operator = Operator["<="]; break;
      case '>=': this.operator = Operator[">="]; break;
      case '!=': this.operator = Operator["!="]; break;
      default: throw Error('Unknown operator: ' + operator);
    }
  }
}
