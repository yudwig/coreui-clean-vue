import {UserTranslatorInterface} from "../translaters/User/UserTranslatorInterface";

export interface ContainerInterface {
  translator: {
    user: UserTranslatorInterface,
    item
  },
  gateway: {

  }
}
