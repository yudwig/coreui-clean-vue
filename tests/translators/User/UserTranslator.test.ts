import {UserTranslator} from "../../../src/modules/translators/User/UserTranslator";
import {User} from "../../../src/modules/entities/User";

const translator = new UserTranslator();

const guest = {
  id:    'guest@example.com',
  name:    'Guest',
  group: {
    id: "1",
    name: 'developer'
  }
};

test("json to guest MockUser", () => {
  const res = translator.translate(guest);
  expect(res.data.user instanceof User).toBeTruthy();
});


