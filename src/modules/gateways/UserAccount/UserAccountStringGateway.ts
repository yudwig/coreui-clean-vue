import {UserAccountGatewayInterface} from "./UserAccountGatewayInterface";
import {UserId} from "../../valueobjects/UserId";
import {UserPassword} from "../../valueobjects/UserPassword";

export class UserAccountStringGateway implements UserAccountGatewayInterface {

  public convert(userIdPort: string, userPasswordPort: string) {

    let userId;
    try {
      userId = new UserId(userIdPort);
    } catch (e) {
      return {data: null, err: e};
    }

    let userPassword;
    try {
      userPassword = new UserPassword(userPasswordPort);
    } catch (e) {
      return {data: null, err: e}
    }

    return {
      data: {
        userId: userId,
        userPassword: userPassword
      },
      err: null
    };
  }
}