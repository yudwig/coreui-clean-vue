import {FindDetailItemUseCase} from "./FindDetailItemUseCase";
import {ItemRepositoryInterface} from "../../../repositories/Item/ItemRepositoryInterface";
import {ItemDetailViewStateInterface} from "../../../states/ItemDetailViewStateInterface";
import {ItemGatewayInterface} from "../../../gateways/Item/ItemGatewayInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class FindDetailItemInteractor implements FindDetailItemUseCase {

  private itemRepository: ItemRepositoryInterface;
  private itemDetailState: ItemDetailViewStateInterface;
  private itemGateway: ItemGatewayInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    itemRepository: ItemRepositoryInterface,
    itemDetailState: ItemDetailViewStateInterface,
    itemGateway: ItemGatewayInterface,
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
      return false;
    }
    const repositoryRes = this.itemRepository.find(gatewayRes.data.id);
    if (repositoryRes.err) {
      this.support.error(repositoryRes.err);
      return false;
    }
    this.itemDetailState.setItem(repositoryRes.data);
  }
}