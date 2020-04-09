import {LoginErrorMessagePresenterInterface} from "../presenters/Login/LoginErrorMessage/LoginErrorMessagePresenterInterface";
import {AuthenticateUseCase} from "../usecases/Login/Authenticate/AuthenticateUseCase";
import {OpenTopPageUseCase} from "../usecases/Login/OpenTopPage/OpenTopPageUseCase";
import {ReplaceOpenDashboardPageInteractor} from "../usecases/Login/OpenTopPage/ReplaceOpenDashboardPageInteractor";
import {AuthenticateFromSessionCookieInteractor} from "../usecases/Login/Authenticate/AuthenticateFromSessionCookieInteractor";
import {LoginErrorMessagePresenter} from "../presenters/Login/LoginErrorMessage/LoginErrorMessagePresenter";
import {MockUser} from "../../../mock/MockUser";
import {UrlRepositoryInterface} from "../repositories/Url/UrlRepositoryInterface";
import {UrlRepository} from "../repositories/Url/UrlRepository";
import {VueRouterUrlDriver} from "../../vue/drivers/VueRouterUrlDriver";
import {UrlTranslator} from "../translaters/Url/UrlTranslator";
import {UrlGateway} from "../gateways/Url/UrlGateway";
import {UrlFactory} from "../factories/Url/UrlFactory";
import {RouteRepositoryInterface} from "../repositories/Route/RouteRepositoryInterface";

export class LoginController {

  private openUserTopPageUseCase: OpenTopPageUseCase;
  private loginUseCase: AuthenticateUseCase;
  private loginErrorMessagePresenter: LoginErrorMessagePresenterInterface;

  private urlRepository: UrlRepositoryInterface;
  private routeRepository: RouteRepositoryInterface;

  constructor() {
    this.urlRepository = new UrlRepository(
      new VueRouterUrlDriver(),
      new UrlTranslator(
        new UrlGateway(),
        new UrlFactory()
      )
    );
    this.openUserTopPageUseCase = new ReplaceOpenDashboardPageInteractor(
      this.urlRepository,
      this.routeRepository
    );
    this.loginUseCase = new AuthenticateFromSessionCookieInteractor();
    this.loginErrorMessagePresenter = new LoginErrorMessagePresenter();
  }

  public login(loginId, password) {
    console.log('login is called.');
    this.loginUseCase.handle(loginId, password);
  }

  public loginAsGuest() {
    const conf = new MockUser();
    this.loginUseCase.handle(conf.guestUserId.value, conf.guestUserPassword.value);
  }

  public getLoginErrorMessage() {
    return this.loginErrorMessagePresenter.format();
  }

  public openUserTopPage() {
    this.openUserTopPageUseCase.handle();
  }
}
