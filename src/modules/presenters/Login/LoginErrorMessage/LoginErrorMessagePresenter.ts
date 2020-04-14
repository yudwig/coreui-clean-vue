import {LoginErrorMessagePresenterInterface} from "./LoginErrorMessagePresenterInterface";
import {UserAuthStateInterface} from "../../../states/UserAuthStateInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";
import {UserAuthMessage, UserAuthPresentation} from "../../../presentations/UserAuth/UserAuthPresentation";

export class LoginErrorMessagePresenter implements LoginErrorMessagePresenterInterface {

  private userAuthState: UserAuthStateInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    userAuthState: UserAuthStateInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  format(): UserAuthPresentation {
    const message = this.userAuthState.getAuthErrorMessage();
    switch (message) {
      case UserAuthMessage.Message.LOGIN_ERROR:
        return {
          message: 'Login Failed.',
          className: UserAuthMessage.ClassName.ERROR
        };
      case UserAuthMessage.Message.FORMAT_ERROR:
        return {
          message: 'Error. Invalid Format.',
          className: UserAuthMessage.ClassName.ERROR
        };
      default:
        return {
          message: '',
          className: ''
        }
    }
  }
}

