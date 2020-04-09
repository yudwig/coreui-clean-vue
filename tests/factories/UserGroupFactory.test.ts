import {UserGroupFactory} from "../../src/modules/factories/UserGroup/UserGroupFactory";
import {UserGroupId} from "../../src/modules/valueobjects/UserGroupId";
import {UserGroupName} from "../../src/modules/valueobjects/UserGroupName";
import {UserGroup} from "../../src/modules/entities/UserGroup";

const factory = new UserGroupFactory();

test("Normal UserGroupId, UserGroupName is input", () => {
  const userGroupId = new UserGroupId(1);
  const userGroupName = new UserGroupName("developer");
  const res = factory.create(userGroupId, userGroupName);
  expect(res.data.userGroup instanceof UserGroup).toBeTruthy();
});