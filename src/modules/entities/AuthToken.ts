import {AuthTokenString} from "../valueobjects/AuthTokenString";
import {Time} from "../valueobjects/Time";

export class AuthToken {

  readonly tokenString: AuthTokenString;
  readonly expireTime: Time;

  constructor(tokenString: AuthTokenString, expireTime: Time) {
    this.tokenString = tokenString;
    this.expireTime = expireTime;
  }
}