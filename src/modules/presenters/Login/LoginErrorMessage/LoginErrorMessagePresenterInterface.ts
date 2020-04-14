import {UserAuthPresentation} from "../../../presentations/UserAuth/UserAuthPresentation";

export interface LoginErrorMessagePresenterInterface {
  format(): UserAuthPresentation;
}