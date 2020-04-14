import {UserId} from "../../valueobjects/UserId";
import {UserPassword} from "../../valueobjects/UserPassword";
import {UserAccount} from "../../entities/UserAccount";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";

export interface UserAccountFactoryInterface {
  create(userId: UserId, userPassword: UserPassword): ModuleQueryResponse<UserAccount>;
}