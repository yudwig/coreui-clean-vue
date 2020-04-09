import {UserAccount} from "../../entities/UserAccount";

interface OutputInterface {
  data: {
    userAccount: UserAccount
  },
  err: Error
}

export interface UserAccountTranslatorInterface {
  translate(userIdPort: string, userPasswordPort: string): OutputInterface;
}