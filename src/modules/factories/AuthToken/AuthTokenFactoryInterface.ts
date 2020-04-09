import {AuthToken} from "../../entities/AuthToken";
import {AuthTokenString} from "../../valueobjects/AuthTokenString";
import {Time} from "../../valueobjects/Time";

interface OutputInterface {
  data: {
    token: AuthToken,
  },
  err: Error
}

export interface AuthTokenFactoryInterface {
  create(tokenString: AuthTokenString, expireTime: Time): OutputInterface;
}