import {AuthToken} from "../../entities/AuthToken";
import {AuthTokenString} from "../../valueobjects/AuthTokenString";
import {Time} from "../../valueobjects/Time";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";

export interface AuthTokenFactoryInterface {
  create(tokenString: AuthTokenString, expireTime: Time): ModuleQueryResponse<AuthToken>;
}