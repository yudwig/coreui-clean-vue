import {UserTranslatorInterface} from "./UserTranslatorInterface";
import {UserGroupGatewayInterface} from "../../gateways/UserGroup/UserGroupGatewayInterface";
import {UserGatewayInterface} from "../../gateways/User/UserGatewayInterface";
import {UserGroupFactoryInterface} from "../../factories/UserGroup/UserGroupFactoryInterface";
import {UserFactoryInterface} from "../../factories/User/UserFactoryInterface";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {User} from "../../entities/User";

export class UserTranslator implements UserTranslatorInterface {

  private userGroupGateway: UserGroupGatewayInterface;
  private userGateway: UserGatewayInterface;
  private userGroupFactory: UserGroupFactoryInterface;
  private userFactory: UserFactoryInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    userGroupGateway: UserGroupGatewayInterface,
    userGateway: UserGatewayInterface,
    userGroupFactory: UserGroupFactoryInterface,
    userFactory: UserFactoryInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  translate(port): ModuleQueryResponse<User> {

    const resUserGroupGateway = this.userGroupGateway.convert(port.group.id, port.group.name);
    if (resUserGroupGateway.err) {
      return new ModuleQueryResponse<User>(null, resUserGroupGateway.err);
    }
    const resUserGateway = this.userGateway.convert(port.id, port.name);
    if (resUserGateway.err) {
      return new ModuleQueryResponse<User>(null, resUserGateway.err);
    }
    const resUserGroupFactory = this.userGroupFactory.create(
      resUserGroupGateway.data.userGroupId,
      resUserGroupGateway.data.userGroupName
    );
    if (resUserGroupFactory.err) {
      return new ModuleQueryResponse<User>(null, resUserGroupFactory.err);
    }
    const resUserFactory = this.userFactory.create(
      resUserGateway.data.userId,
      resUserGateway.data.userName,
      resUserGroupFactory.data
    );
    if (resUserFactory.err) {
      return new ModuleQueryResponse<User>(null, resUserFactory.err);
    }
    return new ModuleQueryResponse<User>(resUserFactory.data, null);
  }
}
