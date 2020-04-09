import {UserAccountPresenterInterface} from "./UserAccountPresenterInterface";
import {UserAuthStateInterface} from "../../../states/UserAuthStateInterface";
import {VuexUserAuthStateAdaptor} from "../../../../vue/states/VuexAuthStateAdapter";

export class UserAccountPresenter implements UserAccountPresenterInterface {

  private userAuthState: UserAuthStateInterface;

  constructor() {
    this.userAuthState = new VuexUserAuthStateAdaptor();
  }

  format() {
    const user = this.userAuthState.getLoginUser();
    const empty = "Unknown";
    return {
      userId: user ? user.id.value : empty,
      userName: user ? user.name.value : empty,
      userGroupName: user ? user.group.name.value : empty
    };
  }
}