import {WhereQueryElement} from "./WhereQueryElement";

export class WhereQuerySubset {

  private elements: WhereQueryElement[];

  constructor(whereQueryElements: WhereQueryElement[]) {
    this.elements = whereQueryElements ? whereQueryElements : [];
  }

  public getElements() {
    return this.elements;
  }
}