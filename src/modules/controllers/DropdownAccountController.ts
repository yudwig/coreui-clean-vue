import {UserAccountPresenterInterface} from "../presenters/DropdownAccount/UserAccount/UserAccountPresenterInterface";
import {UserAccountPresenter} from "../presenters/DropdownAccount/UserAccount/UserAccountPresenter";
import {DeauthenticateUserUseCase} from "../usecases/DropdownAccount/Deauthenticate/DeauthenticateUserUseCase";
import {DeauthenticateUserInteractor} from "../usecases/DropdownAccount/Deauthenticate/DeauthenticateUserInteractor";
import {OpenItemCreatePageUseCase} from "../usecases/DropdownAccount/OpenItemCreatePage/OpenItemCreatePageUseCase";
import {OpenItemCreatePageInteractor} from "../usecases/DropdownAccount/OpenItemCreatePage/OpenItemCraegePageInteractor";

export class DropdownAccountController {

  private userAccountPresenter: UserAccountPresenterInterface;
  private deauthenticateUserUseCase: DeauthenticateUserUseCase;

  constructor() {
    this.userAccountPresenter = new UserAccountPresenter();
    this.deauthenticateUserUseCase = new DeauthenticateUserInteractor();
  }

  public deauthenticate() {
    console.log("deauthenticate is called.");
    this.deauthenticateUserUseCase.handle();
  }

  public getUserAccount() {
    return this.userAccountPresenter.format();
  }


}