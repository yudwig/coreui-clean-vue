import {UserGroupId} from "../valueobjects/UserGroupId";
import {UserGroupName} from "../valueobjects/UserGroupName";

export class UserGroup {

  readonly id: UserGroupId;
  readonly name: UserGroupName;

  constructor(id: UserGroupId, name: UserGroupName) {
    this.id = id;
    this.name = name;
  }
}