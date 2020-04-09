import {ItemPresentation} from "../../../presentations/ItemEdit/ItemPresentation";

export interface ItemPresenterInterface {
  format(): ItemPresentation;
}