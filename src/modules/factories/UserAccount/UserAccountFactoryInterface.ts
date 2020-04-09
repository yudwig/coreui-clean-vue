import {UserId} from "../../valueobjects/UserId";
import {UserPassword} from "../../valueobjects/UserPassword";
import {UserAccount} from "../../entities/UserAccount";

interface OutputInterface {
  data: {
    userAccount: UserAccount
  },
  err: Error
}

export interface UserAccountFactoryInterface {
  create(userId: UserId, userPassword: UserPassword): OutputInterface;
}