import {UserGroupGatewayInterface} from "./UserGroupGatewayInterface";
import {UserGroupId} from "../../valueobjects/UserGroupId";
import {UserGroupName} from "../../valueobjects/UserGroupName";

export class UserGroupStringGateway implements UserGroupGatewayInterface {

  convert(userGroupIdPort: string, userGroupNamePort: string) {
    let userGroupId;
    try {
      userGroupId = new UserGroupId(parseInt(userGroupIdPort, 10));
    } catch (e) {
      return {
        data: null,
        err: e
      };
    }

    let userGroupName;
    try {
      userGroupName = new UserGroupName(userGroupNamePort);
    } catch (e) {
      return {
        data: null,
        err: e
      };
    }

    return {
      data: {
        userGroupId: userGroupId,
        userGroupName: userGroupName
      },
      err: null
    };
  }
}