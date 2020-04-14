import {UserRepositoryInterface} from "./UserRepositoryInterface";
import {UserId} from "../../valueobjects/UserId";
import {User} from "../../entities/User";
import {Users} from "../../entities/Users";
import {MockUser} from "../../../../mock/MockUser";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {ModuleCommandResponse} from "../../entities/ModuleCommandResponse";

export class MockUserRepository implements UserRepositoryInterface {

  private users: Users;
  private mockConfig: MockUser;
  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
    this.users = new Users();
    this.mockConfig = new MockUser();
    this.users.add(this.mockConfig.guestUser);
  }

  get(): ModuleQueryResponse<User> {
    return new ModuleQueryResponse<User>(this.mockConfig.guestUser);
  }

  find(userId: UserId): ModuleQueryResponse<User> {
    return new ModuleQueryResponse<User>(this.mockConfig.guestUser);
  }

  create(user: User): ModuleCommandResponse {
    this.users.add(user);
    return new ModuleCommandResponse(null);
  }

  delete(userId: UserId): ModuleCommandResponse {
    this.users.removeByUserId(userId);
    return new ModuleCommandResponse(null);
  }

  update(userId: UserId, user: User): ModuleCommandResponse {
    this.users.updateByUserId(userId, user);
    return new ModuleCommandResponse(null);
  }
}
