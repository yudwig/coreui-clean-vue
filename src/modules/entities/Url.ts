import {UrlHref} from "../valueobjects/UrlHref";
import {UrlDirectories} from "../valueobjects/UrlDirectories";
import {UrlParameters} from "../valueobjects/UrlParameters";

export class Url {
  readonly href: UrlHref;
  readonly directories: UrlDirectories;
  readonly parameters: UrlParameters;

  constructor(href: UrlHref, directories: UrlDirectories, parameters: UrlParameters) {
    this.href = href;
    this.directories = directories;
    this.parameters = parameters;
  }

  public path() {
    return '/' + this.directories.list.join('/')
  }
}