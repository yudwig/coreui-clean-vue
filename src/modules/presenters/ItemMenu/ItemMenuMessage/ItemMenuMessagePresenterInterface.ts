import {ItemMenuMessagePresentation} from "../../../presentations/ItemMenu/ItemMenuMessagePresentation";

export interface ItemMenuMessagePresenterInterface {
  format(): ItemMenuMessagePresentation;
}