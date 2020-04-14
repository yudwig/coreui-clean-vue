import {ItemPresentation} from "../../../presentations/ItemEdit/ItemPresentation";

export interface EditItemPresenterInterface {
  format(): ItemPresentation;
}