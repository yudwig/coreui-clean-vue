import {UserId} from "../../valueobjects/UserId";
import {UserName} from "../../valueobjects/UserName";

interface OutputInterface {
  data: {
    userId: UserId,
    userName: UserName
  },
  err: Error
}

export interface UserGatewayInterface {
  convert(userIdPort: string, userNamePort: string): OutputInterface;
}