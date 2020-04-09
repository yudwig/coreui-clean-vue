import {ItemCreateMessage} from "../presentations/ItemCreate/ItemCreateMessagePresentation";

export interface ItemCreateViewStateInterface {
  setMessage(message: ItemCreateMessage.Message);
  getMessage(): ItemCreateMessage.Message;
  setCreateStatus(isSuccess: boolean);
  getCreateStatus(): boolean;
  clearMessage();
  clearCreateStatus();
}