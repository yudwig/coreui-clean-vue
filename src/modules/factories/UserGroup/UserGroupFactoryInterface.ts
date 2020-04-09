import {UserGroupId} from "../../valueobjects/UserGroupId";
import {UserGroupName} from "../../valueobjects/UserGroupName";
import {UserGroup} from "../../entities/UserGroup";

interface OutputInterface {
  data: {
    userGroup: UserGroup
  },
  err: Error
}

export interface UserGroupFactoryInterface {
  create(groupId: UserGroupId, groupName: UserGroupName): OutputInterface;
}