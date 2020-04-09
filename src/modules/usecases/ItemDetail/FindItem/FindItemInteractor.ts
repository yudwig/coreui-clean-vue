import {FindItemUseCase} from "./FindItemUseCase";
import {ItemRepositoryInterface} from "../../../repositories/Item/ItemRepositoryInterface";
import {ItemDetailViewStateInterface} from "../../../states/ItemDetailViewStateInterface";
import {ItemGatewayInterface} from "../../../gateways/Item/ItemGatewayInterface";

export class FindItemInteractor implements FindItemUseCase {

  private itemRepository: ItemRepositoryInterface;
  private itemDetailState: ItemDetailViewStateInterface;
  private itemGateway: ItemGatewayInterface;

  constructor(
    itemRepository: ItemRepositoryInterface,
    itemDetailState: ItemDetailViewStateInterface,
    itemGateway: ItemGatewayInterface,
  ) {
    this.itemRepository = itemRepository;
    this.itemDetailState = itemDetailState;
    this.itemGateway = itemGateway;
  }

  handle(id: string) {
    const gatewayRes = this.itemGateway.convert({
      id: id
    });
    if (gatewayRes.err) {
      return false;
    }
    const repositoryRes = this.itemRepository.find(gatewayRes.data.id);
    if (repositoryRes.err) {
      return false;
    }
    this.itemDetailState.setItem(repositoryRes.data);
  }
}