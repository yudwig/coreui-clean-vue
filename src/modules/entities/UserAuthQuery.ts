import {UserId} from "../valueobjects/UserId";
import {UserPassword} from "../valueobjects/UserPassword";

export class UserAuthQuery {

  readonly id: UserId;
  readonly password: UserPassword;

  constructor(query: {
    id: UserId;
    password: UserPassword;
  }) {
    this.id = query.id;
    this.password = query.password;
  }
}