import {OpenItemCreatePageUseCase} from "../usecases/DropdownAccount/OpenItemCreatePage/OpenItemCreatePageUseCase";
import {ModuleSupportInterface} from "../supports/ModuleSupportInterface";

export class DropdownCreateMenusController {

  private openItemCreatePageUseCase: OpenItemCreatePageUseCase;
  private support: ModuleSupportInterface;

  constructor(modules: {
    openItemCreatePageUseCase: OpenItemCreatePageUseCase,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public openItemCreatePage() {
    this.openItemCreatePageUseCase.handle();
  }
}
