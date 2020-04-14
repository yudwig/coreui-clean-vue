import {UserId} from "../../valueobjects/UserId";
import {UserPassword} from "../../valueobjects/UserPassword";

export interface UserAccountGatewayOutput {
  userId: UserId,
  userPassword: UserPassword
}