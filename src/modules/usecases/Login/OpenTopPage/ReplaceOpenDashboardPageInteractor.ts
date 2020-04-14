import {OpenTopPageUseCase} from "./OpenTopPageUseCase";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";
import {RouteRepositoryInterface} from "../../../repositories/Route/RouteRepositoryInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class ReplaceOpenDashboardPageInteractor implements OpenTopPageUseCase {

  private urlRepository: UrlRepositoryInterface;
  private routeRepository: RouteRepositoryInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    urlRepository: UrlRepositoryInterface,
    routeRepository: RouteRepositoryInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  handle() {
    const res = this.routeRepository.findByName('dashboard');
    if (res.err) {
      this.support.error('ReplaceOpenDashboardPageInteractor::handle. system error. res:', res);
      return false;
    }
    this.urlRepository.replaceTransition(res.data);
  }
}