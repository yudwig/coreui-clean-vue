import {DeauthenticateUserUseCase} from "./DeauthenticateUserUseCase";
import {UserAuthStateInterface} from "../../../states/UserAuthStateInterface";
import {VuexUserAuthStateAdaptor} from "../../../../vue/states/VuexAuthStateAdapter";
import {AuthenticationRepositoryInterface} from "../../../repositories/Authentication/AuthenticationRepositoryInterface";
import {MockAuthenticationRepository} from "../../../repositories/Authentication/MockAuthenticationRepository";

export class DeauthenticateUserInteractor implements DeauthenticateUserUseCase {

  private userAuthState: UserAuthStateInterface;
  private authenticationRepository: AuthenticationRepositoryInterface;

  constructor() {
    this.userAuthState = new VuexUserAuthStateAdaptor();
    this.authenticationRepository = new MockAuthenticationRepository();
  }

  handle() {
    console.log("interactor is called");
    this.authenticationRepository.deauthenticate();
    this.userAuthState.clearLoginUser();
  }
}