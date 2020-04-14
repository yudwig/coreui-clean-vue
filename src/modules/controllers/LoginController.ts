import {LoginErrorMessagePresenterInterface} from "../presenters/Login/LoginErrorMessage/LoginErrorMessagePresenterInterface";
import {AuthenticateUseCase} from "../usecases/Login/Authenticate/AuthenticateUseCase";
import {OpenTopPageUseCase} from "../usecases/Login/OpenTopPage/OpenTopPageUseCase";
import {MockUser} from "../../../mock/MockUser";
import {ModuleSupportInterface} from "../supports/ModuleSupportInterface";

export class LoginController {

  private openUserTopPageUseCase: OpenTopPageUseCase;
  private authenticateUseCase: AuthenticateUseCase;
  private loginErrorMessagePresenter: LoginErrorMessagePresenterInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    openUserTopPageUseCase: OpenTopPageUseCase,
    authenticateUseCase: AuthenticateUseCase,
    loginErrorMessagePresenter: LoginErrorMessagePresenterInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public login(loginId, password) {
    this.support.debug('login is called.');
    this.authenticateUseCase.handle(loginId, password);
  }

  public loginAsGuest() {
    const conf = new MockUser();
    this.authenticateUseCase.handle(conf.guestUserId.value, conf.guestUserPassword.value);
  }

  public getLoginErrorMessage() {
    return this.loginErrorMessagePresenter.format();
  }

  public openUserTopPage() {
    this.openUserTopPageUseCase.handle();
  }
}
