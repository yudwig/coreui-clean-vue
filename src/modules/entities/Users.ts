import {User} from "./User";
import {UserId} from "../valueobjects/UserId";

export class Users {

  private users: User[];

  constructor(users: [User] = null) {
    this.users = users ? users : [];
  }

  public add(user: User) {
    this.users.push(user);
    return true;
  }

  public findByUserId(userId: UserId) {
    return this.users.find(user => user.id.equals(userId));
  }

  public removeByUserId(userId: UserId) {
    const index = this.users.findIndex(user => user.id.equals(userId));
    if (index) {
      delete this.users[index];
      return true;
    }
    return false;
  }

  public updateByUserId(userId: UserId, update: User) {
    const targets = this.users.filter(user => user.id.equals(userId));
    if (targets.length !== 1) {
      return false;
    }
    targets[0] = update;
    return true;
  }
}