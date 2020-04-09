import {UserRepositoryInterface} from "./UserRepositoryInterface";
import {UserId} from "../../valueobjects/UserId";
import {User} from "../../entities/User";
import {UserTranslator} from "../../translaters/User/UserTranslator";
import {Users} from "../../entities/Users";
import {MockUser} from "../../../../mock/MockUser";

export class MockUserRepository implements UserRepositoryInterface {

  private translator;
  private users: Users;
  private mockConfig: MockUser;

  constructor() {
    this.translator = new UserTranslator();
    this.users = new Users();
    this.mockConfig = new MockUser();
    this.users.add(this.mockConfig.guestUser);
  }

  get() {
    return {
      data: {
        user: this.mockConfig.guestUser
      },
      err: null
    };
  }

  find(userId: UserId) {
    return undefined;
  }

  create(user: User) {
    this.users.add(user);
    return {
      data: null,
      err: null
    };
  }

  delete(userId: UserId) {
    this.users.removeByUserId(userId);
    return {
      data: null,
      err: null
    };
  }

  update(userId: UserId, user: User) {
    this.users.updateByUserId(userId, user);
    return {
      data: null,
      err: null
    }
  }
}
