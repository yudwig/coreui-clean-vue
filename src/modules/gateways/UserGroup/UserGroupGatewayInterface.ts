import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {UserGroupGatewayOutput} from "./UserGroupGatewayOutput";

export interface UserGroupGatewayInterface {
  convert(userGroupIdPort: string, userGroupNamePort: string): ModuleQueryResponse<UserGroupGatewayOutput>;
}