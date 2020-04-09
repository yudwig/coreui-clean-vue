import {AuthMiddlewareInterface} from "./AuthMiddlewareInterface";
import {UserAuthStateInterface} from "../../states/UserAuthStateInterface";
import {VuexUserAuthStateAdaptor} from "../../../vue/states/VuexAuthStateAdapter";
import {User} from "../../entities/User";
import {AuthError} from "../../errors/AuthError";
import {RouteRepositoryInterface} from "../../repositories/Route/RouteRepositoryInterface";
import {UrlRepository} from "../../repositories/Url/UrlRepository";
import {VueRouterUrlDriver} from "../../../vue/drivers/VueRouterUrlDriver";
import {UrlTranslator} from "../../translaters/Url/UrlTranslator";
import {UrlGateway} from "../../gateways/Url/UrlGateway";
import {UrlFactory} from "../../factories/Url/UrlFactory";
import {RouteRepository} from "../../repositories/Route/RouteRepository";
import {UrlRepositoryInterface} from "../../repositories/Url/UrlRepositoryInterface";

export class AuthMiddleware implements AuthMiddlewareInterface {

  private userAuthState: UserAuthStateInterface;
  private urlRepository: UrlRepositoryInterface;
  private routeRepository: RouteRepositoryInterface;

  constructor() {
    this.userAuthState = new VuexUserAuthStateAdaptor();
    this.urlRepository = new UrlRepository(
      new VueRouterUrlDriver(),
      new UrlTranslator(
        new UrlGateway(),
        new UrlFactory()
      )
    );
    this.routeRepository = new RouteRepository();
  }

  public isAuthenticated() {
    const user = this.userAuthState.getLoginUser();
    console.log("isAuthenticated. user:", user);
    return user && user instanceof User;
  }

  public isAuthErrorOccurred() {
    const err = this.userAuthState.getAuthError();
    return err instanceof AuthError;
  }

  public login() {
    this.userAuthState.clearAuthError();
    const res = this.routeRepository.findByName('dashboard');
    if (res.err) {
      console.log('AuthMiddleware::login system error. res: ', res);
      return false;
    }
    this.urlRepository.replaceByRoute(res.data);
  }

  public logout() {
    this.userAuthState.clearLoginUser();
    const res = this.routeRepository.findByName('login');
    if (res.err) {
      console.log('AuthMiddleware::logout system error. res: ', res);
      return false;
    }
    console.log("logout is called. url: ", res.data);
    this.urlRepository.replaceByRoute(res.data);
  }
}