import {UserTranslatorInterface} from "./UserTranslatorInterface";
import {UserGroupGatewayInterface} from "../../gateways/UserGroup/UserGroupGatewayInterface";
import {UserGatewayInterface} from "../../gateways/User/UserGatewayInterface";
import {UserGroupStringGateway} from "../../gateways/UserGroup/UserGroupStringGateway";
import {UserStringGateway} from "../../gateways/User/UserStringGateway";
import {UserGroupFactoryInterface} from "../../factories/UserGroup/UserGroupFactoryInterface";
import {UserFactoryInterface} from "../../factories/User/UserFactoryInterface";
import {UserGroupFactory} from "../../factories/UserGroup/UserGroupFactory";
import {UserFactory} from "../../factories/User/UserFactory";

export class UserTranslator implements UserTranslatorInterface {

  private userGroupGateway: UserGroupGatewayInterface;
  private userGateway: UserGatewayInterface;
  private userGroupFactory: UserGroupFactoryInterface;
  private userFactory: UserFactoryInterface;

  constructor() {
    this.userGroupGateway = new UserGroupStringGateway();
    this.userGateway = new UserStringGateway();
    this.userGroupFactory = new UserGroupFactory();
    this.userFactory = new UserFactory();
  }

  translate(port) {

    let resUserGroupGateway;
    try {
      resUserGroupGateway = this.userGroupGateway.convert(port.group.id, port.group.name);
    } catch(e) {
      return {
        data: null,
        err: e
      };
    }

    let resUserGateway;
    try {
      resUserGateway = this.userGateway.convert(port.id, port.name);
    } catch (e) {
      return {
        data: null,
        err: e
      };
    }

    let resUserGroupFactory;
    try {
      resUserGroupFactory = this.userGroupFactory.create(
        resUserGroupGateway.data.userGroupId, resUserGroupGateway.data.userGroupName);
    } catch (e) {
      return {
        data: null,
        err: e
      };
    }

    let resUserFactory;
    try {
      resUserFactory = this.userFactory.create(
        resUserGateway.data.userId, resUserGateway.data.userName, resUserGroupFactory.data.userGroup);
    } catch (e) {
      return {
        data: null,
        err: e
      };
    }

    return {
      data: {
        user: resUserFactory.data.user
      },
      err: null
    };
  }
}
