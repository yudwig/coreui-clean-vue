import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Url} from "../../entities/Url";
import {UrlGatewayOutput} from "../../gateways/Url/UrlGatewayOutput";

export interface UrlFactoryInterface {
  create(port: UrlGatewayOutput): ModuleQueryResponse<Url>;
}