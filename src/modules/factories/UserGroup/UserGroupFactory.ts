import {UserGroupFactoryInterface} from "./UserGroupFactoryInterface";
import {UserGroupId} from "../../valueobjects/UserGroupId";
import {UserGroupName} from "../../valueobjects/UserGroupName";
import {UserGroup} from "../../entities/UserGroup";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";

export class UserGroupFactory implements UserGroupFactoryInterface {

  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public create(groupId: UserGroupId, groupName: UserGroupName): ModuleQueryResponse<UserGroup> {
    let userGroup;
    try {
      userGroup = new UserGroup(groupId, groupName);
    } catch(e) {
      return new ModuleQueryResponse<UserGroup>(null, e);
    }
    return new ModuleQueryResponse<UserGroup>(userGroup);
  }
}