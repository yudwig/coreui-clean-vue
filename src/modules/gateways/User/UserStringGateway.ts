import {UserGatewayInterface} from "./UserGatewayInterface";
import {UserId} from "../../valueobjects/UserId";
import {UserName} from "../../valueobjects/UserName";

export class UserStringGateway implements UserGatewayInterface {

  convert(userIdPort: string, userNamePort: string) {
    let userId;
    try {
      userId = new UserId(userIdPort);
    } catch (e) {
      return {
        data: null,
        err: e
      };
    }

    let userName;
    try {
      userName = new UserName(userNamePort);
    } catch (e) {
      return {
        data: null,
        err: e
      }
    }

    return {
      data: {
        userId: userId,
        userName: userName
      },
      err: null
    };
  }
}