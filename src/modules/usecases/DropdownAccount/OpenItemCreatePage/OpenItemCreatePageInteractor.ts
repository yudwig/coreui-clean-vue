import {OpenItemCreatePageUseCase} from "./OpenItemCreatePageUseCase";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";
import {RouteRepositoryInterface} from "../../../repositories/Route/RouteRepositoryInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class OpenItemCreatePageInteractor implements OpenItemCreatePageUseCase {

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
    const res = this.routeRepository.findByName('itemCreate');
    if (res.err) {
      this.support.debug('system error. route: ', res.data);
      return false;
    }
    this.urlRepository.pushTransition(res.data);
  }
}