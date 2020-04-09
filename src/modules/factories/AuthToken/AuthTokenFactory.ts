import {AuthTokenFactoryInterface} from "./AuthTokenFactoryInterface";
import {AuthTokenString} from "../../valueobjects/AuthTokenString";
import {AuthToken} from "../../entities/AuthToken";
import {Time} from "../../valueobjects/Time";

export class AuthTokenFactory implements AuthTokenFactoryInterface {

  public create(tokenString: AuthTokenString, expireTime: Time) {

    let authToken;
    try {
      authToken = new AuthToken(tokenString, expireTime);
    } catch (e) {
      return this.createResponse(authToken, e);
    }
    return this.createResponse(authToken, null);
  }

  private createResponse(authToken: AuthToken, err: Error) {
    return {
      data: {
        token: authToken,
      },
      err: err
    }
  }
}