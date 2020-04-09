import {OpenItemDetailUseCase} from "./OpenItemDetailUseCase";
import {ItemListViewStateInterface} from "../../../states/ItemListViewStateInterface";
import {VuexItemListViewStateAdapter} from "../../../../vue/states/VuexItemListViewStateAdapter";
import {ItemRepositoryInterface} from "../../../repositories/Item/ItemRepositoryInterface";
import {MockItemRepository} from "../../../repositories/Item/MockItemRepository";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";
import {UrlRepository} from "../../../repositories/Url/UrlRepository";
import {UrlTranslator} from "../../../translaters/Url/UrlTranslator";
import {UrlGateway} from "../../../gateways/Url/UrlGateway";
import {UrlFactory} from "../../../factories/Url/UrlFactory";
import {VueRouterUrlDriver} from "../../../../vue/drivers/VueRouterUrlDriver";
import {ItemGatewayInterface} from "../../../gateways/Item/ItemGatewayInterface";
import {ItemGateway} from "../../../gateways/Item/ItemGateway";

export class OpenItemDetailInteractor implements OpenItemDetailUseCase {

  private itemGateway: ItemGatewayInterface;
  private itemListStore: ItemListViewStateInterface;
  private itemRepository: ItemRepositoryInterface;
  private urlRepository: UrlRepositoryInterface;

  constructor() {
    this.itemListStore = new VuexItemListViewStateAdapter();
    this.itemRepository = new MockItemRepository();
    this.urlRepository = new UrlRepository(
      new VueRouterUrlDriver(),
      new UrlTranslator(
        new UrlGateway(),
        new UrlFactory()
      )
    );
    this.itemGateway = new ItemGateway();
  }

  public handle(id: string) {

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
    this.itemListStore.setOpenedItem(repositoryRes.data);


    window.history.pushState(null, null, '/items/' + id);
    // this.routerDriver.push('/items/' + id, {});
  }
}