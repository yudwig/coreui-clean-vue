import {UserAccount} from "../../entities/UserAccount";

interface OutputInterface {
  err: Error
}

export interface AuthenticationRepositoryInterface {
  authenticate(userAccount: UserAccount): OutputInterface;
  deauthenticate(): OutputInterface;
}