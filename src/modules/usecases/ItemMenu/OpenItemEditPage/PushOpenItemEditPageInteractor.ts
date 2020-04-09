import {OpenItemEditPageUseCase} from "./OpenItemEditPageUseCase";
import {RouteRepositoryInterface} from "../../../repositories/Route/RouteRepositoryInterface";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";

export class PushOpenItemEditPageInteractor implements OpenItemEditPageUseCase {

  private routeRepository: RouteRepositoryInterface;
  private urlRepository: UrlRepositoryInterface;

  constructor(
    routeRepository: RouteRepositoryInterface,
    urlRepository: UrlRepositoryInterface
  ) {
    this.routeRepository = routeRepository;
    this.urlRepository = urlRepository;
  }

  handle(id: string) {
    const routeRepositoryRes = this.routeRepository.findByName('itemEdit', {
      id: id
    });
    console.log(routeRepositoryRes);
    if (routeRepositoryRes.err) {
      console.log('err.', routeRepositoryRes);
      return false;
    }
    this.urlRepository.pushRoute(routeRepositoryRes.data);
  }
}