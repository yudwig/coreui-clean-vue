import {ItemPresentation} from "../../../presentations/ItemDetail/ItemPresentation";

export interface DetailItemPresenterInterface {
  format(): ItemPresentation;
}