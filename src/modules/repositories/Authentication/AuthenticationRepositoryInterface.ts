import {UserAccount} from "../../entities/UserAccount";
import {ModuleCommandResponse} from "../../entities/ModuleCommandResponse";

export interface AuthenticationRepositoryInterface {
  authenticate(userAccount: UserAccount): ModuleCommandResponse;
  deauthenticate(): ModuleCommandResponse;
}