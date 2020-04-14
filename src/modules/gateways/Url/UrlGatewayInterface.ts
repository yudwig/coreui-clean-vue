import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {UrlGatewayInput} from "./UrlGatewayInput";
import {UrlGatewayOutput} from "./UrlGatewayOutput";

export interface UrlGatewayInterface {
  convert(port: UrlGatewayInput): ModuleQueryResponse<UrlGatewayOutput>;
}