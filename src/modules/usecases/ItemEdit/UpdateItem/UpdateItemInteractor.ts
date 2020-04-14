import {UpdateItemUseCase} from "./UpdateItemUseCase";
import {RouteRepositoryInterface} from "../../../repositories/Route/RouteRepositoryInterface";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";
import {ItemRepositoryInterface} from "../../../repositories/Item/ItemRepositoryInterface";
import {ItemEditViewStateInterface} from "../../../states/ItemEditViewStateInterface";
import {ItemGatewayInterface} from "../../../gateways/Item/ItemGatewayInterface";
import {ItemFactoryInterface} from "../../../factories/Item/ItemFactoryInterface";
import {ItemEditMessage} from "../../../presentations/ItemEdit/ItemEditMessagePresentation";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class UpdateItemInteractor implements UpdateItemUseCase {

  private itemEditState: ItemEditViewStateInterface;
  private itemGateway: ItemGatewayInterface;
  private itemFactory: ItemFactoryInterface;
  private itemRepository: ItemRepositoryInterface;
  private routeRepository: RouteRepositoryInterface;
  private urlRepository: UrlRepositoryInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    itemEditState: ItemEditViewStateInterface,
    itemGateway: ItemGatewayInterface,
    itemFactory: ItemFactoryInterface,
    itemRepository: ItemRepositoryInterface,
    routeRepository: RouteRepositoryInterface,
    urlRepository: UrlRepositoryInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  handle(form: object) {
    const gatewayRes = this.itemGateway.convert(form);
    if (gatewayRes.err) {
      this.support.error(gatewayRes.err);
      this.itemEditState.setMessage(ItemEditMessage.Message.UPDATE_ERROR);
      return false;
    }
    const item = this.itemEditState.getItem();
    this.support.debug('gatewayRes.', gatewayRes);
    this.support.debug('editState.', item);
    this.support.debug('form.', form);
    const factoryRes = this.itemFactory.merge(item, gatewayRes.data);
    if (factoryRes.err) {
      this.support.error(factoryRes.err);
      this.itemEditState.setMessage(ItemEditMessage.Message.UPDATE_ERROR);
      return false;
    }
    const repositoryRes = this.itemRepository.update(factoryRes.data);
    if (repositoryRes.err) {
      this.support.error(repositoryRes.err);
      this.itemEditState.setMessage(ItemEditMessage.Message.UPDATE_ERROR);
      return false;
    }
    const routeRes = this.routeRepository.findByName('itemDetail', {id: item.id.value});
    if (routeRes.err) {
      this.itemEditState.setMessage(ItemEditMessage.Message.UPDATE_ERROR);
      this.support.error('system error.');
      return false;
    }
    this.urlRepository.pushTransition(routeRes.data);
  }
}