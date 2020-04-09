import {AuthTokenGatewayInterface} from "./AuthTokenGatewayInterface";
import {AuthTokenString} from "../../valueobjects/AuthTokenString";
import {Time} from "../../valueobjects/Time";

export class AuthTokenStringGateway implements AuthTokenGatewayInterface {

  public convert(tokenStringPort, expireTimePort) {

    let tokenString;
    try {
      tokenString = new AuthTokenString(tokenStringPort);
    } catch(e) {
      return {
        data: null,
        err: e
      };
    }

    let expireTime;
    try {
      expireTime = new Time(expireTimePort);
    } catch(e) {
      return {
        data: null,
        err: e
      };
    }

    return {
      data: {
        tokenString: tokenString,
        expireTime: expireTime
      },
      err: null
    };
  }
}