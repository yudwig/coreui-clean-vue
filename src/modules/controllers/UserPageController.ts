import {SyncLoginUserUseCase} from "../usecases/UserPage/SyncLoginUser/SyncLoginUserUseCase";
import {SyncLoginUserInteractor} from "../usecases/UserPage/SyncLoginUser/SyncLoginUserInteractor";
import {CoreUiNavLinksPresenterInterface} from "../presenters/UserPage/NavLinks/CoreUiNavLinksPresenterInterface";
import {CoreUiNavLinksPresenter} from "../presenters/UserPage/NavLinks/CoreUiNavLinksPresenter";
import {HistoryUrlDriver} from "../drivers/Url/HistoryUrlDriver";
import {RouteRepository} from "../repositories/Route/RouteRepository";
import {UrlRepository} from "../repositories/Url/UrlRepository";
import {UrlTranslator} from "../translaters/Url/UrlTranslator";
import {UrlGateway} from "../gateways/Url/UrlGateway";
import {UrlFactory} from "../factories/Url/UrlFactory";

export class UserPageController {

  private syncLoginUserUseCase: SyncLoginUserUseCase;
  private navLinksPresenter: CoreUiNavLinksPresenterInterface;

  constructor() {
    this.syncLoginUserUseCase = new SyncLoginUserInteractor();
    this.navLinksPresenter = new CoreUiNavLinksPresenter(
      new UrlRepository(
        new HistoryUrlDriver(),
        new UrlTranslator(
          new UrlGateway(),
          new UrlFactory()
        )
      ),
      new RouteRepository()
    );
  }

  public syncLoginUser() {
    console.log('sync login user is called');
    this.syncLoginUserUseCase.handle();
  }

  public getNavLinks() {
    console.log('getNavLinks is called.');
    return this.navLinksPresenter.format().navLinks;
  }
}