import {UserId} from "../valueobjects/UserId";
import {UserName} from "../valueobjects/UserName";
import {UserGroup} from "./UserGroup";

interface InputInterface {
  id: UserId,
  name: UserName,
  group: UserGroup
}

export class User {

  readonly id: UserId;
  readonly name: UserName;
  readonly group: UserGroup;

  constructor(input: InputInterface) {
    this.id = input.id;
    this.name = input.name;
    this.group = input.group;
  }
}