import {UserAccount} from "../../entities/UserAccount";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";

export interface UserAccountTranslatorInterface {
  translate(userIdPort: string, userPasswordPort: string): ModuleQueryResponse<UserAccount>;
}