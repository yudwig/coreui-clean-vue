import {UserId} from "../../valueobjects/UserId";
import {UserName} from "../../valueobjects/UserName";

export interface UserGatewayOutput {
  userId: UserId,
  userName: UserName
}
