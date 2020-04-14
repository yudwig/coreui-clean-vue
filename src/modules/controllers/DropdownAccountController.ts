import {UserAccountPresenterInterface} from "../presenters/DropdownAccount/UserAccount/UserAccountPresenterInterface";
import {DeauthenticateUserUseCase} from "../usecases/DropdownAccount/Deauthenticate/DeauthenticateUserUseCase";
import {ModuleSupportInterface} from "../supports/ModuleSupportInterface";

export class DropdownAccountController {

  private userAccountPresenter: UserAccountPresenterInterface;
  private deauthenticateUserUseCase: DeauthenticateUserUseCase;
  private support: ModuleSupportInterface;

  constructor(modules: {
    userAccountPresenter: UserAccountPresenterInterface,
    deauthenticateUserUseCase: DeauthenticateUserUseCase,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public deauthenticate() {
    this.support.debug("deauthenticate is called.");
    this.deauthenticateUserUseCase.handle();
  }

  public getUserAccount() {
    return this.userAccountPresenter.format();
  }
}