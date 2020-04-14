import {DeauthenticateUserUseCase} from "./DeauthenticateUserUseCase";
import {UserAuthStateInterface} from "../../../states/UserAuthStateInterface";
import {AuthenticationRepositoryInterface} from "../../../repositories/Authentication/AuthenticationRepositoryInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class DeauthenticateUserInteractor implements DeauthenticateUserUseCase {

  private userAuthState: UserAuthStateInterface;
  private authenticationRepository: AuthenticationRepositoryInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    userAuthState: UserAuthStateInterface,
    authenticationRepository: AuthenticationRepositoryInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  handle() {
    this.authenticationRepository.deauthenticate();
    this.userAuthState.clearLoginUser();
  }
}