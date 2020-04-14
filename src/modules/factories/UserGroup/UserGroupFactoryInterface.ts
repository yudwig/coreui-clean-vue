import {UserGroupId} from "../../valueobjects/UserGroupId";
import {UserGroupName} from "../../valueobjects/UserGroupName";
import {UserGroup} from "../../entities/UserGroup";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";

export interface UserGroupFactoryInterface {
  create(groupId: UserGroupId, groupName: UserGroupName): ModuleQueryResponse<UserGroup>;
}