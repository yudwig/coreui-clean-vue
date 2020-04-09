import {User} from "../entities/User";

export interface UserAuthStateInterface {
  setAuthError(err: Error);
  getAuthError(): Error;
  clearAuthError();
  setLoginUser(user: User);
  getLoginUser(): User;
  clearLoginUser();
}