import {UserName} from "../../valueobjects/UserName";
import {UserId} from "../../valueobjects/UserId";
import {UserGroup} from "../../entities/UserGroup";
import {User} from "../../entities/User";

interface OutputInterface {
  data: {
    user: User
  },
  err: Error
}

export interface UserFactoryInterface {
  create(userId: UserId, userName: UserName, userGroup: UserGroup): OutputInterface;
}