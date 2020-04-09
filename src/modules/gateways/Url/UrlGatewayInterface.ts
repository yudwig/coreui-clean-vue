import {UrlHref} from "../../valueobjects/UrlHref";
import {UrlDirectories} from "../../valueobjects/UrlDirectories";
import {UrlParameters} from "../../valueobjects/UrlParameters";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";

export interface UrlGatewayInput {
  url: string
}

export interface UrlGatewayOutput {
  urlHref: UrlHref;
  urlDirectories: UrlDirectories;
  urlParameters: UrlParameters;
}

export interface UrlGatewayInterface {
  convert(port: UrlGatewayInput): ModuleQueryResponse<UrlGatewayOutput>;
}