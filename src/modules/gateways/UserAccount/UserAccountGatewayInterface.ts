import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {UserAccountGatewayOutput} from "./UserAccountGatewayOutput";

export interface UserAccountGatewayInterface {
  convert(userIdPort: string, userPasswordPort: string): ModuleQueryResponse<UserAccountGatewayOutput>;
}