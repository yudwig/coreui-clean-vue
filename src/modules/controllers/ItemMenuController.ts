import {DeleteItemUseCase} from "../usecases/ItemMenu/DeleteItem/DeleteItemUseCase";
import {OpenItemEditPageUseCase} from "../usecases/ItemMenu/OpenItemEditPage/OpenItemEditPageUseCase";
import {ModuleSupportInterface} from "../supports/ModuleSupportInterface";

export class ItemMenuController {

  private deleteItemUseCase: DeleteItemUseCase;
  private openItemEditPageUseCase: OpenItemEditPageUseCase;
  private support: ModuleSupportInterface;

  constructor(modules: {
    deleteItemUseCase: DeleteItemUseCase,
    openItemEditPageUseCase: OpenItemEditPageUseCase,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public deleteItem(id: string) {
    this.deleteItemUseCase.handle(id);
  }

  public openItemEditPage(id: string) {
    this.openItemEditPageUseCase.handle(id);
  }
}
