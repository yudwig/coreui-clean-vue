import {UserAccountGatewayInterface} from "./UserAccountGatewayInterface";
import {UserId} from "../../valueobjects/UserId";
import {UserPassword} from "../../valueobjects/UserPassword";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {UserAccountGatewayOutput} from "./UserAccountGatewayOutput";

export class UserAccountGateway implements UserAccountGatewayInterface {

  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public convert(userIdPort: string, userPasswordPort: string): ModuleQueryResponse<UserAccountGatewayOutput> {

    let userId;
    try {
      userId = new UserId(userIdPort);
    } catch (e) {
      return new ModuleQueryResponse<UserAccountGatewayOutput>(null, e);
    }

    let userPassword;
    try {
      userPassword = new UserPassword(userPasswordPort);
    } catch (e) {
      return new ModuleQueryResponse<UserAccountGatewayOutput>(null, e);
    }
    return new ModuleQueryResponse<UserAccountGatewayOutput>({
      userId: userId,
      userPassword: userPassword
    });
  }
}