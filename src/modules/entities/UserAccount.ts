import {UserId} from "../valueobjects/UserId";
import {UserPassword} from "../valueobjects/UserPassword";

export class UserAccount {

  readonly userId: UserId;
  readonly userPassword: UserPassword;

  constructor(userId: UserId, userPassword: UserPassword) {
    this.userId = userId;
    this.userPassword = userPassword;
  }

  public equals(userAccount: UserAccount) {
    return userAccount instanceof UserAccount &&
      userAccount.userId.equals(this.userId) && userAccount.userPassword.equals(this.userPassword);
  }
}