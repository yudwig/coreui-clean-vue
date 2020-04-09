import {AuthToken} from "../../entities/AuthToken";

interface OutputInterface {
  data: {
    authToken: AuthToken
  },
  err: Error
}

export interface AuthTokenRepositoryInterface {
  get(): OutputInterface;
  set(authToken: AuthToken);
}