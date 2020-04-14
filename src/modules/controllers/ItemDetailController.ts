import {FindDetailItemUseCase} from "../usecases/ItemDetail/FindDetailItem/FindDetailItemUseCase";
import {DetailItemPresenterInterface} from "../presenters/ItemDetail/Item/DetailItemPresenterInterface";
import {OpenDeleteResultPageUseCase} from "../usecases/ItemDetail/OpenDeleteResultPage/OpenDeleteResultPageUseCase";
import {ModuleSupportInterface} from "../supports/ModuleSupportInterface";

export class ItemDetailController {

  private itemPresenter: DetailItemPresenterInterface;
  private findItemUseCase: FindDetailItemUseCase;
  private openDeleteResultPageUseCase: OpenDeleteResultPageUseCase;
  private support: ModuleSupportInterface;

  constructor(modules: {
    itemPresenter: DetailItemPresenterInterface,
    findItemUseCase: FindDetailItemUseCase,
    openDeleteResultPageUseCase: OpenDeleteResultPageUseCase,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public findItem(id: string) {
    this.findItemUseCase.handle(id);
  }

  public getItem() {
    return this.itemPresenter.format();
  }

  public openDeleteResultPage() {
    this.openDeleteResultPageUseCase.handle();
  }
}