import {OpenTopPageUseCase} from "./OpenTopPageUseCase";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";
import {RouteRepositoryInterface} from "../../../repositories/Route/RouteRepositoryInterface";

export class ReplaceOpenDashboardPageInteractor implements OpenTopPageUseCase {

  private urlRepository: UrlRepositoryInterface;
  private routeRepository: RouteRepositoryInterface;

  constructor(
    urlRepository: UrlRepositoryInterface,
    routeRepository: RouteRepositoryInterface
  ) {
    this.urlRepository = urlRepository;
    this.routeRepository = routeRepository;
  }

  handle() {
    const res = this.routeRepository.findByName('dashboard');
    if (res.err) {
      console.log('ReplaceOpenDashboardPageInteractor::handle. system error. res:', res);
      return false;
    }
    this.urlRepository.replaceByRoute(res.data);
  }
}