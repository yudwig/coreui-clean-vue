import {UserFactory} from "../../src/modules/factories/User/UserFactory";
import {UserId} from "../../src/modules/valueobjects/UserId";
import {UserName} from "../../src/modules/valueobjects/UserName";
import {UserGroup} from "../../src/modules/entities/UserGroup";
import {UserGroupId} from "../../src/modules/valueobjects/UserGroupId";
import {UserGroupName} from "../../src/modules/valueobjects/UserGroupName";
import {User} from "../../src/modules/entities/User";

const factory = new UserFactory();

const guest = {
  id:    'guest@example.com',
  name:    'Guest',
  group: {
    id: 1,
    name: 'developer'
  }
};

test("Guest MockUser Create Test", () => {
  const userId = new UserId(guest.id);
  const userName = new UserName(guest.name);
  const userGroupId = new UserGroupId(guest.group.id);
  const userGroupName = new UserGroupName(guest.group.name);
  const userGroup = new UserGroup(userGroupId, userGroupName);
  const res = factory.create(userId, userName, userGroup);
  expect(res.data.user instanceof User).toBeTruthy();
});