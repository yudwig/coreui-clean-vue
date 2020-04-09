import {UrlParameter} from "./UrlParameter";

export class UrlParameters {

  private list: UrlParameter[];

  constructor(parameters: UrlParameter[]) {
    this.list = parameters;
  }
}