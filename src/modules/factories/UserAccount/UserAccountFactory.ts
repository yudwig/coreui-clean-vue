import {UserAccountFactoryInterface} from "./UserAccountFactoryInterface";
import {UserId} from "../../valueobjects/UserId";
import {UserPassword} from "../../valueobjects/UserPassword";
import {UserAccount} from "../../entities/UserAccount";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";

export class UserAccountFactory implements UserAccountFactoryInterface {

  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  create(userId: UserId, userPassword: UserPassword): ModuleQueryResponse<UserAccount> {
    let userAccount;
    try {
      userAccount = new UserAccount(userId, userPassword);
    } catch (e) {
      return new ModuleQueryResponse<UserAccount>(null, e);
    }
    return new ModuleQueryResponse<UserAccount>(userAccount);
  }
}