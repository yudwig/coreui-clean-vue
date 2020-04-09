import {VuexUserAuthState as store} from "./VuexAuthState";
import {UserAuthStateInterface} from "../../modules/states/UserAuthStateInterface";
import {User} from "../../modules/entities/User";

export class VuexUserAuthStateAdaptor implements UserAuthStateInterface {

  getAuthError(): Error {
    return store.getters['authError'];
  }

  setAuthError(err: Error) {
    store.dispatch('setAuthError', err);
  }

  clearAuthError() {
    store.dispatch('clearAuthError');
  }

  getLoginUser(): User {
    return store.getters['loginUser'];
  }

  setLoginUser(user: User) {
    store.dispatch('setLoginUser', user);
  }

  clearLoginUser() {
    store.dispatch('clearLoginUser');
  }
}