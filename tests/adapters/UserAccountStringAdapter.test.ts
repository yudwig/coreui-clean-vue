import {UserAccountGateway} from "../../src/modules/gateways/UserAccount/UserAccountGateway";

const adapter = new UserAccountGateway();

test("empty UserIdPort", () => {
    let res = adapter.convert("", "");
    expect(res.err).toBeTruthy();
});

test("success", () => {
    let res = adapter.convert("test", "password");
    expect(res.err).toBeNull();
});

