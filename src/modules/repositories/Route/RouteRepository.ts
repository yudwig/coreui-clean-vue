import {RouteRepositoryInterface} from "./RouteRepositoryInterface";
import {Routes} from "../../entities/Routes";
import {RouteConfig, RouteGroup} from "../../configs/RouteConfig";
import {Route} from "../../entities/Route";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {UndefinedRouteError} from "../../errors/UndefinedRouteError";
import {Url} from "../../entities/Url";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";

export class RouteRepository implements RouteRepositoryInterface {

  private routeConfig: RouteConfig;
  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
    this.routeConfig = new RouteConfig();
  }

  private createUrl(url: string, params: object) {
    this.support.debug(url, params);
    const templates = this.extractTemplates(url);
    templates.forEach(template => {
      const key = template.slice(1, -1);
      this.support.debug(key, template);
      if (params[key]) {
        url = url.replace(template, params[key]);
      }
    });
    this.support.debug(url);
    return url;
  }

  private extractTemplates(url): string[] {
    const matches = url.match(/\{\w+\}/g);
    return matches ? matches : [];
  }

  findByName(name: string, params: object = {}): ModuleQueryResponse<Route> {
    const conf = this.routeConfig.routes.find(route => route.name === name);
    this.support.debug('findByName. conf: ', conf);
    this.support.debug('findByName. params: ', params);
    if (!conf) {
      return new ModuleQueryResponse<Route>(null,
        new UndefinedRouteError('input route name is not found.', name));
    }
    const path = this.extractTemplates(conf.path).length ? this.createUrl(conf.path, params) : conf.path;
    if (this.extractTemplates(path).length) {
      return new ModuleQueryResponse<Route>(null, new Error('Not enough parameter. path:' + path));
    }
    const route = new Route(conf.name, conf.title, path);
    return new ModuleQueryResponse<Route>(route);
  }

  findByUrl(url: Url): ModuleQueryResponse<Route> {
    const conf = this.routeConfig.routes.find(route => url.path() === route.path);
    if (!conf) {
      return new ModuleQueryResponse<Route>(
        null,
        new UndefinedRouteError('input url path is not matched by any route.', url.path())
      );
    }
    const route = new Route(conf.name, conf.title, conf.path);
    return new ModuleQueryResponse<Route>(route);
  }

  getNavLinkRoutes(): ModuleQueryResponse<Routes> {
    const conf = this.routeConfig.routes
      .filter(route => route.group === RouteGroup.User)
      .filter(route => route.isShowNavLink)
      .map(route => new Route(route.name, route.title, route.path));
    const routes = new Routes(conf);
    return new ModuleQueryResponse<Routes>(routes);
  }
}