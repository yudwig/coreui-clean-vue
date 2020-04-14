import {FindEditItemUseCase} from "./FindEditItemUseCase";
import {ItemRepositoryInterface} from "../../../repositories/Item/ItemRepositoryInterface";
import {ItemGatewayInterface} from "../../../gateways/Item/ItemGatewayInterface";
import {ItemEditViewStateInterface} from "../../../states/ItemEditViewStateInterface";
import {ItemEditMessage} from "../../../presentations/ItemEdit/ItemEditMessagePresentation";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class FindEditItemInteractor implements FindEditItemUseCase {

  private itemGateway: ItemGatewayInterface;
  private itemRepository: ItemRepositoryInterface;
  private itemEditState: ItemEditViewStateInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    itemGateway: ItemGatewayInterface,
    itemRepository: ItemRepositoryInterface,
    itemEditState: ItemEditViewStateInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  handle(id: string) {
    const gatewayRes = this.itemGateway.convert({
      id: id
    });
    if (gatewayRes.err) {
      this.support.error(gatewayRes.err);
      this.itemEditState.setMessage(ItemEditMessage.Message.UPDATE_ERROR);
      return false;
    }
    const repositoryRes = this.itemRepository.find(gatewayRes.data.id);
    if (repositoryRes.err) {
      this.support.error(repositoryRes.err);
      this.itemEditState.setMessage(ItemEditMessage.Message.UPDATE_ERROR);
      return false;
    }
    this.itemEditState.setItem(repositoryRes.data);
    return true;
  }
}