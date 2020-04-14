import {CoreUiNavLinksPresenterInterface} from "./CoreUiNavLinksPresenterInterface";
import {CoreUiNavLinksPresentation} from "../../../presentations/UserPage/CoreUiNavLinksPresentation";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";
import {RouteRepositoryInterface} from "../../../repositories/Route/RouteRepositoryInterface";
import {Route} from "../../../entities/Route";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class CoreUiNavLinksPresenter implements CoreUiNavLinksPresenterInterface {

  private urlRepository: UrlRepositoryInterface;
  private routeRepository: RouteRepositoryInterface;
  private support: ModuleSupportInterface;
  private navLinkParams = {
    dashboard: {
      icon: 'cil-speedometer',
      badge: {
        variant: 'primary',
      }
    },
    itemList: {
      icon: 'cil-list',
    },
  };

  constructor(modules: {
    urlRepository: UrlRepositoryInterface,
    routeRepository: RouteRepositoryInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  private createNavLinkParam(route: Route, nowRoute: Route) {
    const baseParam = {
      name: route.name,
      to: route.path,
      attributes: route.equals(nowRoute) ? {class: 'active'} : {}
    };
    return Object.assign(baseParam, this.navLinkParams[route.name]);
  }

  format(): CoreUiNavLinksPresentation {
    const url = this.urlRepository.get();
    if (url.err) {
      return {navLinks: null};
    }
    const routes = this.routeRepository.getNavLinkRoutes();
    if (routes.err) {
      return {navLinks: null};
    }
    const nowRoute = this.routeRepository.findByUrl(url.data);
    const navLinks = routes.data.getList().map(route => this.createNavLinkParam(route, nowRoute.data));
    return {
      navLinks: navLinks
    }
  }
}