import {AuthToken} from "../../entities/AuthToken";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {ModuleCommandResponse} from "../../entities/ModuleCommandResponse";

export interface AuthTokenRepositoryInterface {
  get(): ModuleQueryResponse<AuthToken>;
  set(authToken: AuthToken): ModuleCommandResponse;
}