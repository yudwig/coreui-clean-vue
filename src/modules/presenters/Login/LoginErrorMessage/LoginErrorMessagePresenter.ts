import {LoginErrorMessagePresenterInterface} from "./LoginErrorMessagePresenterInterface";
import {VuexUserAuthStateAdaptor} from "../../../../vue/states/VuexAuthStateAdapter";

export class LoginErrorMessagePresenter implements LoginErrorMessagePresenterInterface {

  private authState;

  constructor() {
    this.authState = new VuexUserAuthStateAdaptor();
  }

  format(): string {
    const err = this.authState.getAuthError();
    console.log("presenter: ", err);
    return err ? err.message : "";
  }
}

