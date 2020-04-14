import {OpenDeleteResultPageUseCase} from "./OpenDeleteResultPageUseCase";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";
import {RouteRepositoryInterface} from "../../../repositories/Route/RouteRepositoryInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class PushOpenDeleteResultPageInteractor implements OpenDeleteResultPageUseCase {

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
    const routeRepositoryRes = this.routeRepository.findByName('itemList');
    if (routeRepositoryRes.err) {
      this.support.error('delete failed. itemList is not found. repository response: ', routeRepositoryRes);
      return false;
    }
    this.urlRepository.replaceTransition(routeRepositoryRes.data);
  }
}