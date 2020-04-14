import {ItemEditMessagePresenterInterface} from "../presenters/ItemEdit/ItemEditMessage/ItemEditMessagePresenterInterface";
import {FindEditItemUseCase} from "../usecases/ItemEdit/FindEditItem/FindEditItemUseCase";
import {EditItemPresenterInterface} from "../presenters/ItemEdit/Item/EditItemPresenterInterface";
import {UpdateItemUseCase} from "../usecases/ItemEdit/UpdateItem/UpdateItemUseCase";
import {ModuleSupportInterface} from "../supports/ModuleSupportInterface";

export class ItemEditController {

  private findItemUseCase: FindEditItemUseCase;
  private updateItemUseCase: UpdateItemUseCase;
  private itemPresenter: EditItemPresenterInterface;
  private itemEditStatusPresenter: ItemEditMessagePresenterInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    findItemUseCase: FindEditItemUseCase,
    updateItemUseCase: UpdateItemUseCase,
    itemPresenter: EditItemPresenterInterface,
    itemEditStatusPresenter: ItemEditMessagePresenterInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public findItem(id: string) {
    this.findItemUseCase.handle(id);
  }

  public updateItem(form: object) {
    this.updateItemUseCase.handle(form);
  }

  public getEditStatus() {
    return this.itemEditStatusPresenter.format();
  }

  public getItem() {
    return this.itemPresenter.format();
  }
}