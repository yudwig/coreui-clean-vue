import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {UserGatewayOutput} from "./UserGatewayOutput";

export interface UserGatewayInterface {
  convert(userIdPort: string, userNamePort: string): ModuleQueryResponse<UserGatewayOutput>;
}