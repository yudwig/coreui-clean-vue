import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {AuthTokenGatewayOutput} from "./AuthTokenGatewayOutput";

export interface AuthTokenGatewayInterface {
  convert(tokenStringPort: string, expireTimePort: string): ModuleQueryResponse<AuthTokenGatewayOutput>
}