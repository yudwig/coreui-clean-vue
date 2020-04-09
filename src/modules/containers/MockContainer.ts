import {SessionStorage} from "../drivers/WebStorage/SessionStorage";
import {ContainerInterface} from "../configs/ContainerConfig";

export class MockContainer implements ContainerInterface {
  register() {
    const a = SessionStorage;
  }

  gateway: {};
  translator: { user: UserTranslatorInterface; item };
}

