import {UserGatewayInterface} from "./UserGatewayInterface";
import {UserId} from "../../valueobjects/UserId";
import {UserName} from "../../valueobjects/UserName";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {UserGatewayOutput} from "./UserGatewayOutput";

export class UserGateway implements UserGatewayInterface {

  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  convert(userIdPort: string, userNamePort: string): ModuleQueryResponse<UserGatewayOutput> {
    let userId;
    try {
      userId = new UserId(userIdPort);
    } catch (e) {
      return new ModuleQueryResponse<UserGatewayOutput>(null, e);
    }
    let userName;
    try {
      userName = new UserName(userNamePort);
    } catch (e) {
      return new ModuleQueryResponse<UserGatewayOutput>(null, e);
    }
    return new ModuleQueryResponse<UserGatewayOutput>({
      userId: userId,
      userName: userName
    });
  }
}