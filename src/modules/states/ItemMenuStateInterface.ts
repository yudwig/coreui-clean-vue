import {ItemMenuMessage} from "../presentations/ItemMenu/ItemMenuMessagePresentation";

export interface ItemMenuStateInterface {
  setMessage(message: ItemMenuMessage.Message);
  getMessage(): ItemMenuMessage.Message;
  clearMessage();
}