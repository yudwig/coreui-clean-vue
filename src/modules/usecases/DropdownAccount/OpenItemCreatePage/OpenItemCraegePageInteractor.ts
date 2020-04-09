import {OpenItemCreatePageUseCase} from "./OpenItemCreatePageUseCase";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";
import {RouteRepositoryInterface} from "../../../repositories/Route/RouteRepositoryInterface";
import {RouteRepository} from "../../../repositories/Route/RouteRepository";
import {UrlRepository} from "../../../repositories/Url/UrlRepository";
import {VueRouterUrlDriver} from "../../../../vue/drivers/VueRouterUrlDriver";
import {UrlTranslator} from "../../../translaters/Url/UrlTranslator";
import {UrlGateway} from "../../../gateways/Url/UrlGateway";
import {UrlFactory} from "../../../factories/Url/UrlFactory";

export class OpenItemCreatePageInteractor implements OpenItemCreatePageUseCase {

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
    this.routeRepository = new RouteRepository();
  }

  handle() {
    const res = this.routeRepository.findByName('itemCreate');
    if (res.err) {
      console.log('system error. route: ', res.data);
      return false;
    }
    this.urlRepository.pushRoute(res.data);
  }
}