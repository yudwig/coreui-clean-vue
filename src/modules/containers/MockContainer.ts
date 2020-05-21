import {Container} from "./Container";
import * as barrel from "./ModulesBarrel";

const container = Object.assign({}, Container, {
  driver: {
    webStorage: {
      session: {
        module: barrel.MockWebStorage
      }
    }
  }
});


