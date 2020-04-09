import {FindItemUseCase} from "./FindItemUseCase";
import {ItemRepositoryInterface} from "../../../repositories/Item/ItemRepositoryInterface";
import {ItemGatewayInterface} from "../../../gateways/Item/ItemGatewayInterface";
import {ItemEditViewStateInterface} from "../../../states/ItemEditViewStateInterface";
import {ItemEditMessage} from "../../../presentations/ItemEdit/ItemEditMessagePresentation";

export class FindItemInteractor implements FindItemUseCase {

  private itemGateway: ItemGatewayInterface;
  private itemRepository: ItemRepositoryInterface;
  private itemEditState: ItemEditViewStateInterface;

  constructor(
    itemRepository: ItemRepositoryInterface,
    itemGateway: ItemGatewayInterface,
    itemEditState: ItemEditViewStateInterface
  ) {
    this.itemRepository = itemRepository;
    this.itemGateway = itemGateway;
    this.itemEditState = itemEditState;
  }

  handle(id: string) {
    const gatewayRes = this.itemGateway.convert({
      id: id
    });
    if (gatewayRes.err) {
      this.itemEditState.setMessage(ItemEditMessage.Message.UPDATE_ERROR);
      return false;
    }
    const repositoryRes = this.itemRepository.find(gatewayRes.data.id);
    if (repositoryRes.err) {
      this.itemEditState.setMessage(ItemEditMessage.Message.UPDATE_ERROR);
      return false;
    }
    this.itemEditState.setItem(repositoryRes.data);
    return true;
  }
}