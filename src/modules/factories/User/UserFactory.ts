import {UserFactoryInterface} from "./UserFactoryInterface";
import {UserId} from "../../valueobjects/UserId";
import {UserName} from "../../valueobjects/UserName";
import {UserGroup} from "../../entities/UserGroup";
import {User} from "../../entities/User";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";

export class UserFactory implements UserFactoryInterface {

  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  create(userId: UserId, userName: UserName, userGroup: UserGroup): ModuleQueryResponse<User> {
    let user;
    try {
      user = new User({
        id: userId,
        name: userName,
        group: userGroup
      });
    } catch(e) {
      return new ModuleQueryResponse<User>(null, e);
    }
    return new ModuleQueryResponse<User>(user);
  }
}