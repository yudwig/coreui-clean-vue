import {UserId} from "../valueobjects/UserId";
import {UserName} from "../valueobjects/UserName";
import {UserGroup} from "./UserGroup";
import {DomainTypeError} from "../errors/DomainTypeError";

export class User {

  readonly id: UserId;
  readonly name: UserName;
  readonly group: UserGroup;

  constructor(input: {
    id: UserId,
    name: UserName,
    group: UserGroup
  }) {
    if (!(input.id instanceof UserId)) {
      throw new DomainTypeError('input id is not applied UserId.', input.id);
    }
    if (!(input.name instanceof UserName)) {
      throw new DomainTypeError('input name is not applied UserName.', input.name);
    }
    if (!(input.group instanceof UserGroup)) {
      throw new DomainTypeError('input group is not applied UserId.', input.group);
    }
    Object.assign(this, input);
  }
}