import {DeleteItemUseCase} from "./DeleteItemUseCase";
import {ItemRepositoryInterface} from "../../../repositories/Item/ItemRepositoryInterface";
import {RouteRepositoryInterface} from "../../../repositories/Route/RouteRepositoryInterface";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";
import {ItemGatewayInterface} from "../../../gateways/Item/ItemGatewayInterface";
import {ItemEditMessage} from "../../../presentations/ItemEdit/ItemEditMessagePresentation";
import {LoggingServiceInterface} from "../../../services/Logging/LoggingServiceInterface";
import {ItemMenuStateInterface} from "../../../states/ItemMenuStateInterface";
import {ItemMenuMessage} from "../../../presentations/ItemMenu/ItemMenuMessagePresentation";

export class DeleteItemInteractor implements DeleteItemUseCase {

  private itemGateway: ItemGatewayInterface;
  private itemRepository: ItemRepositoryInterface;
  private routeRepository: RouteRepositoryInterface;
  private urlRepository: UrlRepositoryInterface;
  private loggingService: LoggingServiceInterface;
  private itemMenuState: ItemMenuStateInterface;

  constructor(
    itemGateway: ItemGatewayInterface,
    itemRepository: ItemRepositoryInterface,
    routeRepository: RouteRepositoryInterface,
    urlRepository: UrlRepositoryInterface,
    loggingService: LoggingServiceInterface,
    itemMenuState: ItemMenuStateInterface
  ) {
    this.itemGateway = itemGateway;
    this.itemRepository = itemRepository;
    this.routeRepository = routeRepository;
    this.urlRepository = urlRepository;
    this.loggingService = loggingService;
    this.itemMenuState = itemMenuState;
  }

  handle(id: string) {
    const gatewayRes = this.itemGateway.convert({id: id});
    if (gatewayRes.err) {
      this.loggingService.error('delete failed. gateway response: ', gatewayRes);
      this.itemMenuState.setMessage(ItemMenuMessage.Message.DELETE_ERROR);
      return false;
    }
    const repositoryRes = this.itemRepository.delete(gatewayRes.data.id);
    if (repositoryRes.err) {
      this.loggingService.error('delete failed. repository response: ', gatewayRes);
      this.itemMenuState.setMessage(ItemMenuMessage.Message.DELETE_ERROR);
      return false;
    }
  }
}