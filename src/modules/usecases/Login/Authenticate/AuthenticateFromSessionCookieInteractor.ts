import {AuthenticateUseCase} from "./AuthenticateUseCase";
import {UserAuthStateInterface} from "../../../states/UserAuthStateInterface";
import {UserAccountTranslatorInterface} from "../../../translaters/UserAccount/UserAccountTranslatorInterface";
import {UserAccountTranslator} from "../../../translaters/UserAccount/UserAccountTranslator";
import {UserAccountStringGateway} from "../../../gateways/UserAccount/UserAccountStringGateway";
import {UserAccountFactory} from "../../../factories/UserAccount/UserAccountFactory";
import {AuthenticationRepositoryInterface} from "../../../repositories/Authentication/AuthenticationRepositoryInterface";
import {MockAuthenticationRepository} from "../../../repositories/Authentication/MockAuthenticationRepository";
import {VuexUserAuthStateAdaptor} from "../../../../vue/states/VuexAuthStateAdapter";
import {UserRepositoryInterface} from "../../../repositories/User/UserRepositoryInterface";
import {MockUserRepository} from "../../../repositories/User/MockUserRepository";

export class AuthenticateFromSessionCookieInteractor implements AuthenticateUseCase {

  private authState: UserAuthStateInterface;
  private userAccountTranslator: UserAccountTranslatorInterface;
  private authenticationRepository: AuthenticationRepositoryInterface;
  private userRepository: UserRepositoryInterface;

  constructor() {
    this.authState = new VuexUserAuthStateAdaptor();
    this.userAccountTranslator = new UserAccountTranslator(
      new UserAccountFactory(),
      new UserAccountStringGateway()
    );
    this.authenticationRepository = new MockAuthenticationRepository();
    this.userRepository = new MockUserRepository();
  }

  handle(userId: string, userPassword: string) {

    let res;
    res = this.userAccountTranslator.translate(userId, userPassword);
    if (res.err) {
      this.authState.setAuthError(res.err);
      return false;
    }

    res = this.authenticationRepository.authenticate(res.data.userAccount);
    if (res.err) {
      this.authState.setAuthError(res.err);
      return false;
    }

    res = this.userRepository.get();
    if (res.err) {
      this.authState.setAuthError(res.err);
      return false;
    }

    this.authState.setLoginUser(res.data.user);
    return true;
  }
}