import {SyncLoginUserUseCase} from "../usecases/UserPage/SyncLoginUser/SyncLoginUserUseCase";
import {CoreUiNavLinksPresenterInterface} from "../presenters/UserPage/NavLinks/CoreUiNavLinksPresenterInterface";
import {ModuleSupportInterface} from "../supports/ModuleSupportInterface";

export class UserPageController {

  private syncLoginUserUseCase: SyncLoginUserUseCase;
  private navLinksPresenter: CoreUiNavLinksPresenterInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    syncLoginUserUseCase: SyncLoginUserUseCase,
    navLinksPresenter: CoreUiNavLinksPresenterInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public syncLoginUser() {
    this.support.debug('sync login user is called');
    this.syncLoginUserUseCase.handle();
  }

  public getNavLinks() {
    this.support.debug('getNavLinks is called.');
    return this.navLinksPresenter.format().navLinks;
  }
}