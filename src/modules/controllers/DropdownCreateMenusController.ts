import {OpenItemCreatePageUseCase} from "../usecases/DropdownAccount/OpenItemCreatePage/OpenItemCreatePageUseCase";
import {OpenItemCreatePageInteractor} from "../usecases/DropdownAccount/OpenItemCreatePage/OpenItemCraegePageInteractor";

export class DropdownCreateMenusController {

  private openItemCreatePageUseCase: OpenItemCreatePageUseCase;

  constructor() {
    this.openItemCreatePageUseCase = new OpenItemCreatePageInteractor();
  }

  public openItemCreatePage() {
    this.openItemCreatePageUseCase.handle();
  }
}
