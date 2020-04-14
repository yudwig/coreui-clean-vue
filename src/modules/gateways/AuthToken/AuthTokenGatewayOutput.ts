import {AuthTokenString} from "../../valueobjects/AuthTokenString";
import {Time} from "../../valueobjects/Time";

export interface AuthTokenGatewayOutput {
  tokenString: AuthTokenString,
  expireTime: Time
}