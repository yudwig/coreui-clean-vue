import {UserGroupFactoryInterface} from "./UserGroupFactoryInterface";
import {UserGroupId} from "../../valueobjects/UserGroupId";
import {UserGroupName} from "../../valueobjects/UserGroupName";
import {UserGroup} from "../../entities/UserGroup";

export class UserGroupFactory implements UserGroupFactoryInterface {

  public create(groupId: UserGroupId, groupName: UserGroupName) {
    let userGroup;
    try {
      userGroup = new UserGroup(groupId, groupName);
    } catch(e) {
      return {
        data: null,
        err: e
      };
    }

    return {
      data: {
        userGroup: userGroup
      },
      err: null
    };
  }
}