import {User} from "../entities/User";
import {UserAuthMessage} from "../presentations/UserAuth/UserAuthPresentation";

export interface UserAuthStateInterface {
  setAuthError(payload: {isAuthError: boolean, message: UserAuthMessage.Message});
  getAuthErrorMessage(): UserAuthMessage.Message;
  isAuthError(): boolean;
  clearAuthError();
  setLoginUser(user: User);
  getLoginUser(): User;
  clearLoginUser();
}