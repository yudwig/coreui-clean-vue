import {SyncLoginUserUseCase} from "./SyncLoginUserUseCase";
import {UserRepositoryInterface} from "../../../repositories/User/UserRepositoryInterface";
import {MockUserRepository} from "../../../repositories/User/MockUserRepository";
import {UserAuthStateInterface} from "../../../states/UserAuthStateInterface";
import {VuexUserAuthStateAdaptor} from "../../../../vue/states/VuexAuthStateAdapter";

export class SyncLoginUserInteractor implements SyncLoginUserUseCase {

  private userRepository: UserRepositoryInterface;
  private userAuthState: UserAuthStateInterface;

  constructor() {
    this.userRepository = new MockUserRepository();
    this.userAuthState = new VuexUserAuthStateAdaptor();
  }

  handle() {
    const resUserRepository = this.userRepository.get();
    if (resUserRepository.err) {
      this.userAuthState.setAuthError(resUserRepository.err);
      return false;
    }
    this.userAuthState.setLoginUser(resUserRepository.data.user);
    return true;
  }
}