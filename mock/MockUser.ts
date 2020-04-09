import {UserId} from "../src/modules/valueobjects/UserId";
import {UserName} from "../src/modules/valueobjects/UserName";
import {UserPassword} from "../src/modules/valueobjects/UserPassword";
import {UserGroupId} from "../src/modules/valueobjects/UserGroupId";
import {UserGroupName} from "../src/modules/valueobjects/UserGroupName";
import {UserGroup} from "../src/modules/entities/UserGroup";
import {User} from "../src/modules/entities/User";
import {UserAccount} from "../src/modules/entities/UserAccount";

export class MockUser {

  private readonly guest = {
    id: "guest@example.com",
    name: "Guest",
    password: "test",
    group: {
      id: 1,
      name: "developer"
    }
  };

  get guestUserId() {
    return new UserId(this.guest.id);
  };

  get guestUserName() {
    return new UserName(this.guest.name);
  };

  get guestUserPassword() {
    return new UserPassword(this.guest.password);
  };

  get guestUserAccount() {
    return new UserAccount(this.guestUserId, this.guestUserPassword);
  }

  get guestUserGroupId() {
    return new UserGroupId(this.guest.group.id);
  }

  get guestUserGroupName() {
    return new UserGroupName(this.guest.group.name);
  }

  get guestUserGroup() {
    return new UserGroup(this.guestUserGroupId, this.guestUserGroupName);
  }

  get guestUser() {
    return new User({
      id: this.guestUserId,
      name: this.guestUserName,
      group: this.guestUserGroup
    });
  }
}