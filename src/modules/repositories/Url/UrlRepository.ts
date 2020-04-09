import {UrlRepositoryInterface} from "./UrlRepositoryInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Url} from "../../entities/Url";
import {ModuleCommandResponse} from "../../entities/ModuleCommandResponse";
import {UrlDriverInterface} from "../../drivers/Url/UrlDriverInterface";
import {UrlTranslatorInterface} from "../../translaters/Url/UrlTranslatorInterface";
import {Route} from "../../entities/Route";

export class UrlRepository implements UrlRepositoryInterface {

  private driver: UrlDriverInterface;
  private translator: UrlTranslatorInterface;

  constructor(
    urlDriver: UrlDriverInterface,
    urlTranslator: UrlTranslatorInterface
  ) {
    this.driver = urlDriver;
    this.translator = urlTranslator
  }

  get(): ModuleQueryResponse<Url> {
    const driverRes = this.driver.read();
    if (driverRes.err) {
      return new ModuleQueryResponse<Url>(null, driverRes.err);
    }
    const translatorRes = this.translator.translate({url: driverRes.data});
    if (translatorRes.err) {
      return new ModuleQueryResponse<Url>(null, translatorRes.err);
    }
    return new ModuleQueryResponse<Url>(translatorRes.data);
  }

  pop(): ModuleCommandResponse {
    const res = this.driver.pop();
    return new ModuleCommandResponse(res.err);
  }

  pushRoute(route: Route): ModuleCommandResponse {
    const res = this.driver.push(route.path);
    return new ModuleCommandResponse(res.err);
  }

  pushUrl(url: Url): ModuleCommandResponse {
    const res = this.driver.push(url.href.value);
    return new ModuleCommandResponse(res.err);
  }

  replaceByRoute(route: Route): ModuleCommandResponse {
    const res = this.driver.write(route.path);
    return new ModuleCommandResponse(res.err);
  }

  replaceByUrl(url: Url): ModuleCommandResponse {
    const res = this.driver.write(url.href.value);
    return new ModuleCommandResponse(res.err);
  }
}