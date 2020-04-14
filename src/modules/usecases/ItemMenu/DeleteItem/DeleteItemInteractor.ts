import {DeleteItemUseCase} from "./DeleteItemUseCase";
import {ItemRepositoryInterface} from "../../../repositories/Item/ItemRepositoryInterface";
import {ItemGatewayInterface} from "../../../gateways/Item/ItemGatewayInterface";
import {ItemMenuStateInterface} from "../../../states/ItemMenuStateInterface";
import {ItemMenuMessage} from "../../../presentations/ItemMenu/ItemMenuMessagePresentation";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class DeleteItemInteractor implements DeleteItemUseCase {

  private itemGateway: ItemGatewayInterface;
  private itemRepository: ItemRepositoryInterface;
  private itemMenuState: ItemMenuStateInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    itemGateway: ItemGatewayInterface,
    itemRepository: ItemRepositoryInterface,
    itemMenuState: ItemMenuStateInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  handle(id: string) {
    const gatewayRes = this.itemGateway.convert({id: id});
    if (gatewayRes.err) {
      this.support.error('delete failed. gateway response: ', gatewayRes);
      this.itemMenuState.setMessage(ItemMenuMessage.Message.DELETE_ERROR);
      return false;
    }
    const repositoryRes = this.itemRepository.delete(gatewayRes.data.id);
    if (repositoryRes.err) {
      this.support.error('delete failed. repository response: ', gatewayRes);
      this.itemMenuState.setMessage(ItemMenuMessage.Message.DELETE_ERROR);
      return false;
    }
  }
}