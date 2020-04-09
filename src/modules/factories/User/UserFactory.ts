import {UserFactoryInterface} from "./UserFactoryInterface";
import {UserId} from "../../valueobjects/UserId";
import {UserName} from "../../valueobjects/UserName";
import {UserGroup} from "../../entities/UserGroup";
import {User} from "../../entities/User";

export class UserFactory implements UserFactoryInterface{
  create(userId: UserId, userName: UserName, userGroup: UserGroup) {

    let user;
    try {
      user = new User({
        id: userId,
        name: userName,
        group: userGroup
      });
    } catch(e) {
      return {
        data: null,
        err: e
      };
    }

    return {
      data: {
        user: user
      },
      err: null
    };
  }
}