import {ItemEditMessagePresentation} from "../../../presentations/ItemEdit/ItemEditMessagePresentation";

export interface ItemEditMessagePresenterInterface {
  format(): ItemEditMessagePresentation;
}