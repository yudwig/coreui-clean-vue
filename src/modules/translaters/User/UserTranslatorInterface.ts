import {User} from "../../entities/User";

interface InputInterface {
  id: string,
  name: string,
  group: {
    id: string,
    name: string
  }
}

interface OutputInterface {
  data: {
    user: User
  },
  err: Error
}

export interface UserTranslatorInterface {
  translate(port: InputInterface): OutputInterface;
}