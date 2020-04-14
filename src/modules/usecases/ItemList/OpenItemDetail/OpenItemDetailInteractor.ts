import {OpenItemDetailUseCase} from "./OpenItemDetailUseCase";
import {ItemListViewStateInterface} from "../../../states/ItemListViewStateInterface";
import {ItemRepositoryInterface} from "../../../repositories/Item/ItemRepositoryInterface";
import {ItemGatewayInterface} from "../../../gateways/Item/ItemGatewayInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";
import {RouteRepositoryInterface} from "../../../repositories/Route/RouteRepositoryInterface";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";

export class OpenItemDetailInteractor implements OpenItemDetailUseCase {

  private itemGateway: ItemGatewayInterface;
  private itemListState: ItemListViewStateInterface;
  private itemRepository: ItemRepositoryInterface;
  private routeRepository: RouteRepositoryInterface;
  private urlRepository: UrlRepositoryInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    itemGateway: ItemGatewayInterface,
    itemListState: ItemListViewStateInterface,
    itemRepository: ItemRepositoryInterface,
    routeRepository: RouteRepositoryInterface,
    urlRepository: UrlRepositoryInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public handle(id: string) {
    const gatewayRes = this.itemGateway.convert({
      id: id
    });
    if (gatewayRes.err) {
      this.support.error(gatewayRes.err);
      return false;
    }
    const repositoryRes = this.itemRepository.find(gatewayRes.data.id);
    if (repositoryRes.err) {
      this.support.error(repositoryRes.err);
      return false;
    }
    this.itemListState.setOpenedItem(repositoryRes.data);
    const routeRes = this.routeRepository.findByName('itemDetail', {
      id: id
    });
    if (routeRes.err) {
      this.support.error(routeRes.err);
      return false;
    }
    this.support.debug('route: ', routeRes.data);
    this.urlRepository.push(routeRes.data);
  }
}