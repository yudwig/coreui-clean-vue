import {UserAccount} from "../../entities/UserAccount";
import {AuthToken} from "../../entities/AuthToken";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";

export interface CertificationRepositoryInterface {
  request(userAccount: UserAccount): ModuleQueryResponse<AuthToken>;
}