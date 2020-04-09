import {UserAccountStringGateway} from "../../src/modules/gateways/UserAccount/UserAccountStringGateway";

const adapter = new UserAccountStringGateway();

test("empty UserIdPort", () => {
    let res = adapter.convert("", "");
    expect(res.err).toBeTruthy();
});

test("success", () => {
    let res = adapter.convert("test", "password");
    expect(res.err).toBeNull();
});

