import {Route} from "../../entities/Route";
import {Routes} from "../../entities/Routes";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Url} from "../../entities/Url";

export interface RouteRepositoryInterface {
  getNavLinkRoutes(): ModuleQueryResponse<Routes>;
  findByName(name: string, params?: object): ModuleQueryResponse<Route>;
  findByUrl(url: Url): ModuleQueryResponse<Route>;
}