import {UserGroupGateway} from "../../src/modules/gateways/UserGroup/UserGroupGateway";
import {UserGroupId} from "../../src/modules/valueobjects/UserGroupId";
import {UserGroupName} from "../../src/modules/valueobjects/UserGroupName";

const gateway = new UserGroupGateway();

test("string UserGroupId is input", () => {
  const res = gateway.convert("1", "developer");
  expect(res.data.userGroupId instanceof UserGroupId).toBeTruthy();
});

test("string UserGroupName is input", () => {
  const res = gateway.convert("1", "developer");
  expect(res.data.userGroupName instanceof UserGroupName).toBeTruthy();
});


