import {UserAccountPresenterInterface} from "./UserAccountPresenterInterface";
import {UserAuthStateInterface} from "../../../states/UserAuthStateInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class UserAccountPresenter implements UserAccountPresenterInterface {

  private userAuthState: UserAuthStateInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    userAuthState: UserAuthStateInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
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