import {AuthenticateUseCase} from "./AuthenticateUseCase";
import {UserAuthStateInterface} from "../../../states/UserAuthStateInterface";
import {UserAccountTranslatorInterface} from "../../../translators/UserAccount/UserAccountTranslatorInterface";
import {AuthenticationRepositoryInterface} from "../../../repositories/Authentication/AuthenticationRepositoryInterface";
import {UserRepositoryInterface} from "../../../repositories/User/UserRepositoryInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";
import {UserAuthMessage} from "../../../presentations/UserAuth/UserAuthPresentation";

export class AuthenticateFromSessionCookieInteractor implements AuthenticateUseCase {

  private authState: UserAuthStateInterface;
  private userAccountTranslator: UserAccountTranslatorInterface;
  private authenticationRepository: AuthenticationRepositoryInterface;
  private userRepository: UserRepositoryInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    authState: UserAuthStateInterface,
    userAccountTranslator: UserAccountTranslatorInterface,
    authenticationRepository: AuthenticationRepositoryInterface,
    userRepository: UserRepositoryInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  handle(userId: string, userPassword: string) {
    let res;
    res = this.userAccountTranslator.translate(userId, userPassword);
    if (res.err) {
      this.support.error(res.err);
      this.authState.setAuthError({
        isAuthError: true,
        message: UserAuthMessage.Message.FORMAT_ERROR
      });
      return false;
    }
    res = this.authenticationRepository.authenticate(res.data);
    if (res.err) {
      this.support.error(res.err);
      this.authState.setAuthError({
        isAuthError: true,
        message: UserAuthMessage.Message.LOGIN_ERROR
      });
      return false;
    }
    res = this.userRepository.get();
    if (res.err) {
      this.support.error(res.err);
      this.authState.setAuthError({
        isAuthError: true,
        message: UserAuthMessage.Message.LOGIN_ERROR
      });
      return false;
    }
    this.authState.setLoginUser(res.data);
    return true;
  }
}