import {InitItemCreateStatesUseCase} from "./InitItemCreateStatesUseCase";
import {ItemCreateViewStateInterface} from "../../../states/ItemCreateViewStateInterface";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

export class InitItemCreateStatesInteractor implements InitItemCreateStatesUseCase {

  private itemCreateState: ItemCreateViewStateInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    itemCreateState: ItemCreateViewStateInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  handle() {
    this.itemCreateState.clearMessage();
    this.itemCreateState.clearCreateStatus();
  }
}