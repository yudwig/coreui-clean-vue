import {ItemsPresentation} from "../../../presentations/ItemList/ItemsPresentation";

export interface ItemsPresenterInterface {
  format(): ItemsPresentation;
}