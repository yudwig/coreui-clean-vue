import {AuthTokenFactoryInterface} from "./AuthTokenFactoryInterface";
import {AuthTokenString} from "../../valueobjects/AuthTokenString";
import {AuthToken} from "../../entities/AuthToken";
import {Time} from "../../valueobjects/Time";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";

export class AuthTokenFactory implements AuthTokenFactoryInterface {

  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public create(tokenString: AuthTokenString, expireTime: Time): ModuleQueryResponse<AuthToken> {
    let authToken;
    try {
      authToken = new AuthToken(tokenString, expireTime);
    } catch (e) {
      return new ModuleQueryResponse<AuthToken>(null, e);
    }
    return new ModuleQueryResponse<AuthToken>(authToken);
  }
}