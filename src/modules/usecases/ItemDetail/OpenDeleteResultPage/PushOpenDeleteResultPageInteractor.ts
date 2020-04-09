import {OpenDeleteResultPageUseCase} from "./OpenDeleteResultPageUseCase";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";
import {RouteRepositoryInterface} from "../../../repositories/Route/RouteRepositoryInterface";

export class PushOpenDeleteResultPageInteractor implements OpenDeleteResultPageUseCase {

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
    const routeRepositoryRes = this.routeRepository.findByName('itemList');
    if (routeRepositoryRes.err) {
      console.log('delete failed. itemList is not found. repository response: ', routeRepositoryRes);
      return false;
    }
    this.urlRepository.replaceByRoute(routeRepositoryRes.data);
  }
}