import {UserId} from "../../valueobjects/UserId";
import {UserPassword} from "../../valueobjects/UserPassword";

interface OutputInterface {
  data: {
    userId: UserId,
    userPassword: UserPassword
  },
  err: Error
}

export interface UserAccountGatewayInterface {
  convert(userIdPort: any, userPasswordPort: any): OutputInterface;
}