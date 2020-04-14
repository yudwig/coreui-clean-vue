import {OpenItemEditPageUseCase} from "./OpenItemEditPageUseCase";
import {RouteRepositoryInterface} from "../../../repositories/Route/RouteRepositoryInterface";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class PushOpenItemEditPageInteractor implements OpenItemEditPageUseCase {

  private routeRepository: RouteRepositoryInterface;
  private urlRepository: UrlRepositoryInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    routeRepository: RouteRepositoryInterface,
    urlRepository: UrlRepositoryInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  handle(id: string) {
    const routeRepositoryRes = this.routeRepository.findByName('itemEdit', {
      id: id
    });
    this.support.debug(routeRepositoryRes);
    if (routeRepositoryRes.err) {
      this.support.error('err.', routeRepositoryRes);
      return false;
    }
    this.urlRepository.pushTransition(routeRepositoryRes.data);
  }
}