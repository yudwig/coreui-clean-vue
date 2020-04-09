import {ItemListMessagePresentation} from "../../../presentations/ItemList/ItemListMessagePresentation";

export interface ItemListMessagePresenterInterface {
  format(): ItemListMessagePresentation;
}