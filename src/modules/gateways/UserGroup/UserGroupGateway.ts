import {UserGroupGatewayInterface} from "./UserGroupGatewayInterface";
import {UserGroupId} from "../../valueobjects/UserGroupId";
import {UserGroupName} from "../../valueobjects/UserGroupName";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {UserGroupGatewayOutput} from "./UserGroupGatewayOutput";

export class UserGroupGateway implements UserGroupGatewayInterface {

  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  convert(userGroupIdPort: string, userGroupNamePort: string): ModuleQueryResponse<UserGroupGatewayOutput> {
    let userGroupId;
    try {
      userGroupId = new UserGroupId(parseInt(userGroupIdPort, 10));
    } catch (e) {
      return new ModuleQueryResponse<UserGroupGatewayOutput>(null, e);
    }
    let userGroupName;
    try {
      userGroupName = new UserGroupName(userGroupNamePort);
    } catch (e) {
      return new ModuleQueryResponse<UserGroupGatewayOutput>(null, e);
    }
    return new ModuleQueryResponse<UserGroupGatewayOutput>({
      userGroupId: userGroupId,
      userGroupName: userGroupName
    });
  }
}