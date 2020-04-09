import {CreateItemUseCase} from "../usecases/ItemCreate/CreateItem/CreateItemUseCase";
import {CreateItemAndTransitionInteractor} from "../usecases/ItemCreate/CreateItem/CreateItemAndTransitionInteractor";
import {MockItemRepository} from "../repositories/Item/MockItemRepository";
import {ItemCreateQueryTranslator} from "../translaters/ItemCreateQuery/ItemCreateQueryTranslator";
import {ItemGateway} from "../gateways/Item/ItemGateway";
import {ItemCreateQueryFactory} from "../factories/ItemCreateQuery/ItemCreateQueryFactory";
import {InitItemCreateStatesUseCase} from "../usecases/ItemCreate/InitItemCreateStates/InitItemCreateStatesUseCase";
import {InitItemCreateStatesInteractor} from "../usecases/ItemCreate/InitItemCreateStates/InitItemCreateStatesInteractor";
import {ItemCreateViewStateInterface} from "../states/ItemCreateViewStateInterface";
import {VuexItemCreateViewStateAdapter} from "../../vue/states/VuexItemCreateViewStateAdapter";
import {RouteRepository} from "../repositories/Route/RouteRepository";
import {UrlRepository} from "../repositories/Url/UrlRepository";
import {UrlTranslator} from "../translaters/Url/UrlTranslator";
import {UrlGateway} from "../gateways/Url/UrlGateway";
import {UrlFactory} from "../factories/Url/UrlFactory";
import {ItemCreateMessagePresenterInterface} from "../presenters/ItemCreate/ItemCreateMessage/ItemCreateMessagePresenterInterface";
import {ItemCreateMessagePresenter} from "../presenters/ItemCreate/ItemCreateMessage/ItemCreateMessagePresenter";
import {ItemListViewStateInterface} from "../states/ItemListViewStateInterface";
import {VuexItemListViewStateAdapter} from "../../vue/states/VuexItemListViewStateAdapter";
import {VueRouterUrlDriver} from "../../vue/drivers/VueRouterUrlDriver";

export class ItemCreateController {

  private createItemUseCase: CreateItemUseCase;
  private initItemCreateStatesUseCase: InitItemCreateStatesUseCase;
  private itemCreateState: ItemCreateViewStateInterface;

  private resultStatusPresenter: ItemCreateMessagePresenterInterface;
  private itemListState: ItemListViewStateInterface;

  constructor() {
    this.itemCreateState = new VuexItemCreateViewStateAdapter();
    this.itemListState = new VuexItemListViewStateAdapter();
    this.createItemUseCase = new CreateItemAndTransitionInteractor(
      new MockItemRepository(),
      new ItemCreateQueryTranslator(
        new ItemGateway(),
        new ItemCreateQueryFactory()
      ),
      this.itemCreateState,
      new RouteRepository(),
      new UrlRepository(
        new VueRouterUrlDriver(),
        new UrlTranslator(
          new UrlGateway(),
          new UrlFactory()
        )
      ),
      this.itemListState
    );
    this.initItemCreateStatesUseCase = new InitItemCreateStatesInteractor(
      this.itemCreateState
    );
    this.resultStatusPresenter = new ItemCreateMessagePresenter(
      this.itemCreateState
    );
  }

  public createItem(form) {
    this.createItemUseCase.handle(form);
  }

  public initStates() {
    this.initItemCreateStatesUseCase.handle();
  }

  public getResultStatus() {
    return this.resultStatusPresenter.format();
  }
}