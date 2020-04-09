import {UserAccountTranslatorInterface} from "./UserAccountTranslatorInterface";
import {UserAccountFactoryInterface} from "../../factories/UserAccount/UserAccountFactoryInterface";
import {UserAccountGatewayInterface} from "../../gateways/UserAccount/UserAccountGatewayInterface";

export class UserAccountTranslator implements UserAccountTranslatorInterface {

  private userAccountFactory: UserAccountFactoryInterface;
  private userAccountGateway: UserAccountGatewayInterface;

  constructor(factory: UserAccountFactoryInterface, gateway: UserAccountGatewayInterface) {
    this.userAccountFactory = factory;
    this.userAccountGateway = gateway;
  }

  translate(userIdPort: string, userPasswordPort: string) {

    let gRes = this.userAccountGateway.convert(userIdPort, userPasswordPort);
    if (gRes.err) {
      return {
        data: null,
        err: gRes.err
      }
    }

    let fRes = this.userAccountFactory.create(gRes.data.userId, gRes.data.userPassword);
    if (fRes.err) {
      return {
        data: null,
        err: fRes.err
      }
    }

    return {
      data: {
        userAccount: fRes.data.userAccount
      },
      err: null
    };
  }
}