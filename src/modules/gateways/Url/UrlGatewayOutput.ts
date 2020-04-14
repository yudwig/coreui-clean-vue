import {UrlHref} from "../../valueobjects/UrlHref";
import {UrlDirectories} from "../../valueobjects/UrlDirectories";
import {UrlParameters} from "../../valueobjects/UrlParameters";

export interface UrlGatewayOutput {
  urlHref: UrlHref;
  urlDirectories: UrlDirectories;
  urlParameters: UrlParameters;
}