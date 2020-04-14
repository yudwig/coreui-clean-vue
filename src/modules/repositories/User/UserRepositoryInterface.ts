import {User} from "../../entities/User";
import {UserId} from "../../valueobjects/UserId";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {ModuleCommandResponse} from "../../entities/ModuleCommandResponse";

export interface UserRepositoryInterface {
  get(): ModuleQueryResponse<User>;
  find(userId: UserId): ModuleQueryResponse<User>;
  create(user: User): ModuleCommandResponse;
  delete(userId: UserId): ModuleCommandResponse;
  update(userId: UserId, user: User): ModuleCommandResponse;
}