import {AuthMiddlewareInterface} from "./AuthMiddlewareInterface";
import {UserAuthStateInterface} from "../../states/UserAuthStateInterface";
import {User} from "../../entities/User";
import {RouteRepositoryInterface} from "../../repositories/Route/RouteRepositoryInterface";
import {UrlRepositoryInterface} from "../../repositories/Url/UrlRepositoryInterface";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";

export class AuthMiddleware implements AuthMiddlewareInterface {

  private userAuthState: UserAuthStateInterface;
  private urlRepository: UrlRepositoryInterface;
  private routeRepository: RouteRepositoryInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    userAuthState: UserAuthStateInterface,
    urlRepository: UrlRepositoryInterface,
    routeRepository: RouteRepositoryInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public isAuthenticated() {
    const user = this.userAuthState.getLoginUser();
    this.support.debug("isAuthenticated. user:", user);
    return user && user instanceof User;
  }

  public isAuthErrorOccurred() {
    this.support.debug('userAuthState:',  this.userAuthState);
    return this.userAuthState.isAuthError();
  }

  public login() {
    this.userAuthState.clearAuthError();
    const res = this.routeRepository.findByName('dashboard');
    if (res.err) {
      this.support.debug('AuthMiddleware::login system error. res: ', res);
      return false;
    }
    this.urlRepository.replaceTransition(res.data);
  }

  public logout() {
    this.userAuthState.clearLoginUser();
    const res = this.routeRepository.findByName('login');
    if (res.err) {
      this.support.debug('AuthMiddleware::logout system error. res: ', res);
      return false;
    }
    this.support.debug("logout is called. url: ", res.data);
    this.urlRepository.replaceTransition(res.data);
  }
}