import {UpdateItemUseCase} from "./UpdateItemUseCase";
import {RouteRepositoryInterface} from "../../../repositories/Route/RouteRepositoryInterface";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";
import {ItemRepositoryInterface} from "../../../repositories/Item/ItemRepositoryInterface";
import {ItemEditViewStateInterface} from "../../../states/ItemEditViewStateInterface";
import {ItemGatewayInterface} from "../../../gateways/Item/ItemGatewayInterface";
import {ItemFactoryInterface} from "../../../factories/Item/ItemFactoryInterface";
import {ItemEditMessage} from "../../../presentations/ItemEdit/ItemEditMessagePresentation";

export class UpdateItemInteractor implements UpdateItemUseCase {

  private itemEditState: ItemEditViewStateInterface;
  private itemGateway: ItemGatewayInterface;
  private itemFactory: ItemFactoryInterface;

  private itemRepository: ItemRepositoryInterface;
  private routeRepository: RouteRepositoryInterface;
  private urlRepository: UrlRepositoryInterface;

  constructor(
    itemEditState: ItemEditViewStateInterface,
    itemGateway: ItemGatewayInterface,
    itemFactory: ItemFactoryInterface,
    itemRepository: ItemRepositoryInterface,
    routeRepository: RouteRepositoryInterface,
    urlRepository: UrlRepositoryInterface
  ) {
    this.itemEditState = itemEditState;
    this.itemGateway = itemGateway;
    this.itemFactory = itemFactory;
    this.itemRepository = itemRepository;
    this.routeRepository = routeRepository;
    this.urlRepository = urlRepository;
  }

  handle(form: object) {
    const gatewayRes = this.itemGateway.convert(form);
    if (gatewayRes.err) {
      this.itemEditState.setMessage(ItemEditMessage.Message.UPDATE_ERROR);
      return false;
    }
    const item = this.itemEditState.getItem();
    console.log('gatewayRes.', gatewayRes);
    console.log('editState.', item);
    console.log('form.', form);
    const factoryRes = this.itemFactory.merge(item, gatewayRes.data);
    if (factoryRes.err) {
      this.itemEditState.setMessage(ItemEditMessage.Message.UPDATE_ERROR);
      return false;
    }
    const repositoryRes = this.itemRepository.update(factoryRes.data);
    if (repositoryRes.err) {
      this.itemEditState.setMessage(ItemEditMessage.Message.UPDATE_ERROR);
      return false;
    }
    this.itemEditState.setMessage(ItemEditMessage.Message.UPDATE_SUCCESS);
    const routeRes = this.routeRepository.findByName('itemDetail', {id: item.id.value});
    if (routeRes.err) {
      this.itemEditState.setMessage(ItemEditMessage.Message.UPDATE_ERROR);
      console.log('system error.');
      return false;
    }
    this.urlRepository.pushRoute(routeRes.data);
  }
}