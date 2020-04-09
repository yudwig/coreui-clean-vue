import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Url} from "../../entities/Url";
import {ModuleCommandResponse} from "../../entities/ModuleCommandResponse";
import {Route} from "../../entities/Route";

export interface UrlRepositoryInterface {
  get(): ModuleQueryResponse<Url>;
  pop(): ModuleCommandResponse;
  replaceByUrl(url: Url): ModuleCommandResponse;
  replaceByRoute(route: Route): ModuleCommandResponse;
  pushUrl(url: Url): ModuleCommandResponse;
  pushRoute(route: Route): ModuleCommandResponse;
}