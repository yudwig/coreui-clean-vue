import {VuexUserAuthState as state} from "./VuexAuthState";
import {UserAuthStateInterface} from "../../modules/states/UserAuthStateInterface";
import {User} from "../../modules/entities/User";
import {UserAuthMessage} from "../../modules/presentations/UserAuth/UserAuthPresentation";

export class VuexUserAuthStateAdaptor implements UserAuthStateInterface {

  getAuthErrorMessage(): UserAuthMessage.Message {
    return state.getters['authErrorMessage'];
  }

  clearAuthError() {
    state.dispatch('clearAuthError');
  }

  getLoginUser(): User {
    return state.getters['loginUser'];
  }

  setLoginUser(user: User) {
    state.dispatch('setLoginUser', user);
  }

  clearLoginUser() {
    state.dispatch('clearLoginUser');
  }

  isAuthError(): boolean {
    return state.getters['isAuthError'];
  }

  setAuthError(payload: {isAuthError: boolean, message: UserAuthMessage.Message}) {
    state.dispatch('setAuthError', payload);
  }
}