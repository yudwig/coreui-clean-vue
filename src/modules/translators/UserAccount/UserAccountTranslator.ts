import {UserAccountTranslatorInterface} from "./UserAccountTranslatorInterface";
import {UserAccountFactoryInterface} from "../../factories/UserAccount/UserAccountFactoryInterface";
import {UserAccountGatewayInterface} from "../../gateways/UserAccount/UserAccountGatewayInterface";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {UserAccount} from "../../entities/UserAccount";

export class UserAccountTranslator implements UserAccountTranslatorInterface {

  private userAccountFactory: UserAccountFactoryInterface;
  private userAccountGateway: UserAccountGatewayInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    userAccountFactory: UserAccountFactoryInterface,
    userAccountGateway: UserAccountGatewayInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  translate(userIdPort: string, userPasswordPort: string): ModuleQueryResponse<UserAccount> {
    const gatewayResponse = this.userAccountGateway.convert(
      userIdPort,
      userPasswordPort
    );
    if (gatewayResponse.err) {
      return new ModuleQueryResponse<UserAccount>(null, gatewayResponse.err);
    }
    const factoryResponse = this.userAccountFactory.create(
      gatewayResponse.data.userId,
      gatewayResponse.data.userPassword
    );
    if (factoryResponse.err) {
      return new ModuleQueryResponse<UserAccount>(null, factoryResponse.err);
    }
    return new ModuleQueryResponse<UserAccount>(factoryResponse.data);
  }
}