import {UserStringGateway} from "../../src/modules/gateways/User/UserStringGateway";
import {UserId} from "../../src/modules/valueobjects/UserId";

const gateway = new UserStringGateway();

test("id is full", () => {
  const res = gateway.convert("guest@example.com", "Guest");
  expect(res.data.userId instanceof UserId).toBeTruthy();
});

test("name is full", () => {
  const res = gateway.convert("guest@example.com", "Guest");
  expect(res.data.userId instanceof UserId).toBeTruthy();
});
