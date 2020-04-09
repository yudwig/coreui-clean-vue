import {UserAccount} from "../../entities/UserAccount";
import {AuthToken} from "../../entities/AuthToken";

interface OutputInterface {
  data: {
    authToken: AuthToken
  },
  err: Error
}

export interface CertificationRepositoryInterface {
  request(userAccount: UserAccount): OutputInterface;
}