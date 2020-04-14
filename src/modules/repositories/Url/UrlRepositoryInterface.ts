import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Url} from "../../entities/Url";
import {ModuleCommandResponse} from "../../entities/ModuleCommandResponse";
import {Route} from "../../entities/Route";

export interface UrlRepositoryInterface {
  get(): ModuleQueryResponse<Url>;
  push(route: Route): ModuleCommandResponse;
  replace(route: Route): ModuleCommandResponse;
  pop(): ModuleCommandResponse;
  pushTransition(route: Route): ModuleCommandResponse;
  replaceTransition(route: Route): ModuleCommandResponse;
  popTransition(): ModuleCommandResponse;
}