import {UserName} from "../../valueobjects/UserName";
import {UserId} from "../../valueobjects/UserId";
import {UserGroup} from "../../entities/UserGroup";
import {User} from "../../entities/User";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";

export interface UserFactoryInterface {
  create(userId: UserId, userName: UserName, userGroup: UserGroup): ModuleQueryResponse<User>;
}