import {AuthTokenGatewayInterface} from "./AuthTokenGatewayInterface";
import {AuthTokenString} from "../../valueobjects/AuthTokenString";
import {Time} from "../../valueobjects/Time";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {AuthTokenGatewayOutput} from "./AuthTokenGatewayOutput";

export class AuthTokenGateway implements AuthTokenGatewayInterface {

  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public convert(tokenStringPort, expireTimePort): ModuleQueryResponse<AuthTokenGatewayOutput> {
    let tokenString;
    try {
      tokenString = new AuthTokenString(tokenStringPort);
    } catch(e) {
      return new ModuleQueryResponse<AuthTokenGatewayOutput>(null, e);
    }
    let expireTime;
    try {
      expireTime = new Time(expireTimePort);
    } catch(e) {
      return new ModuleQueryResponse<AuthTokenGatewayOutput>(null, e);
    }
    return new ModuleQueryResponse<AuthTokenGatewayOutput>({
      tokenString: tokenString,
      expireTime: expireTime
    });
  }
}