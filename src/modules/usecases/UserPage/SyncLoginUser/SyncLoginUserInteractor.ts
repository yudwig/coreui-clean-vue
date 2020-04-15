import {SyncLoginUserUseCase} from "./SyncLoginUserUseCase";
import {UserRepositoryInterface} from "../../../repositories/User/UserRepositoryInterface";
import {UserAuthStateInterface} from "../../../states/UserAuthStateInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";
import {UserAuthMessage} from "../../../presentations/UserAuth/UserAuthPresentation";

export class SyncLoginUserInteractor implements SyncLoginUserUseCase {

  private userRepository: UserRepositoryInterface;
  private userAuthState: UserAuthStateInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    userRepository: UserRepositoryInterface,
    userAuthState: UserAuthStateInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  handle() {
    const resUserRepository = this.userRepository.get();
    if (resUserRepository.err) {
      this.userAuthState.setAuthError({
        isAuthError: true,
        message: UserAuthMessage.Message.LOGIN_ERROR
      });
      return false;
    }
    this.userAuthState.setLoginUser(resUserRepository.data);
    return true;
  }
}