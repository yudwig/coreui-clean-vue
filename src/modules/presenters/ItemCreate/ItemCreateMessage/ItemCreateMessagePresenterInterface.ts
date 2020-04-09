import {ItemCreateMessagePresentation} from "../../../presentations/ItemCreate/ItemCreateMessagePresentation";

export interface ItemCreateMessagePresenterInterface {
  format(): ItemCreateMessagePresentation;
}