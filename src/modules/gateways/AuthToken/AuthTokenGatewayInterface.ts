import {AuthTokenString} from "../../valueobjects/AuthTokenString";
import {Time} from "../../valueobjects/Time";

export interface AuthTokenGatewayInterface {

  convert(tokenStringPort: any, expireTimePort: any): {
    data: {
      tokenString: AuthTokenString,
      expireTime: Time
    },
    err: Error,
  }
}