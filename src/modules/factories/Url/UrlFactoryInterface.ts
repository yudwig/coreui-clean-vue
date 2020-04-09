import {UrlGatewayOutput} from "../../gateways/Url/UrlGatewayInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Url} from "../../entities/Url";

export interface UrlFactoryInterface {
  create(port: UrlGatewayOutput): ModuleQueryResponse<Url>;
}