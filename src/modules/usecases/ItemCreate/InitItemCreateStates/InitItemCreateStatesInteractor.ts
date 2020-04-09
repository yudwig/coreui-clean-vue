import {InitItemCreateStatesUseCase} from "./InitItemCreateStatesUseCase";
import {ItemCreateViewStateInterface} from "../../../states/ItemCreateViewStateInterface";

export class InitItemCreateStatesInteractor implements InitItemCreateStatesUseCase {

  private itemCreateState: ItemCreateViewStateInterface;

  constructor(itemCreateState: ItemCreateViewStateInterface) {
    this.itemCreateState = itemCreateState;
  }

  handle() {
    this.itemCreateState.clearMessage();
    this.itemCreateState.clearCreateStatus();
  }
}