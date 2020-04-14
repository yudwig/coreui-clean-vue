import {CreateItemUseCase} from "../usecases/ItemCreate/CreateItem/CreateItemUseCase";
import {InitItemCreateStatesUseCase} from "../usecases/ItemCreate/InitItemCreateStates/InitItemCreateStatesUseCase";
import {ItemCreateMessagePresenterInterface} from "../presenters/ItemCreate/ItemCreateMessage/ItemCreateMessagePresenterInterface";
import {ModuleSupportInterface} from "../supports/ModuleSupportInterface";

export class ItemCreateController {

  private createItemUseCase: CreateItemUseCase;
  private initItemCreateStatesUseCase: InitItemCreateStatesUseCase;
  private resultStatusPresenter: ItemCreateMessagePresenterInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    createItemUseCase: CreateItemUseCase,
    initItemCreateStatesUseCase: InitItemCreateStatesUseCase,
    resultStatusPresenter: ItemCreateMessagePresenterInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
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