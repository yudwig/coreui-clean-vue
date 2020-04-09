import {UserAccountFactoryInterface} from "./UserAccountFactoryInterface";
import {UserId} from "../../valueobjects/UserId";
import {UserPassword} from "../../valueobjects/UserPassword";
import {UserAccount} from "../../entities/UserAccount";

export class UserAccountFactory implements UserAccountFactoryInterface {

  create(userId: UserId, userPassword: UserPassword) {

    let userAccount;
    try {
      userAccount = new UserAccount(userId, userPassword);
    } catch (e) {
      return {
        data: null,
        err: e
      }
    }

    return {
      data: {
        userAccount: userAccount
      },
      err: null
    }
  }
}