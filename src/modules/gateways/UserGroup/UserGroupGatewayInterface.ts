import {UserGroupId} from "../../valueobjects/UserGroupId";
import {UserGroupName} from "../../valueobjects/UserGroupName";

export interface UserGroupGatewayInterfaceOutput {
  data: {
    userGroupId: UserGroupId,
    userGroupName: UserGroupName
  },
  err: Error
}

export interface UserGroupGatewayInterface {
  convert(userGroupIdPort: string, userGroupNamePort: string): UserGroupGatewayInterfaceOutput;
}