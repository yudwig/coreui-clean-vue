import {ItemPresentation} from "../../../presentations/ItemDetail/ItemPresentation";

export interface ItemPresenterInterface {
  format(): ItemPresentation;
}