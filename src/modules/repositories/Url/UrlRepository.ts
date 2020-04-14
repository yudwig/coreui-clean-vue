import {UrlRepositoryInterface} from "./UrlRepositoryInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Url} from "../../entities/Url";
import {ModuleCommandResponse} from "../../entities/ModuleCommandResponse";
import {UrlDriverInterface} from "../../drivers/Url/UrlDriverInterface";
import {UrlTranslatorInterface} from "../../translators/Url/UrlTranslatorInterface";
import {Route} from "../../entities/Route";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";
import {RouterDriverInterface} from "../../drivers/Router/RouterDriverInterface";

export class UrlRepository implements UrlRepositoryInterface {

  private urlDriver: UrlDriverInterface;
  private routerDriver: RouterDriverInterface;
  private urlTranslator: UrlTranslatorInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    urlDriver: UrlDriverInterface,
    routerDriver: RouterDriverInterface,
    urlTranslator: UrlTranslatorInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  get(): ModuleQueryResponse<Url> {
    const driverRes = this.urlDriver.read();
    if (driverRes.err) {
      return new ModuleQueryResponse<Url>(null, driverRes.err);
    }
    const translatorRes = this.urlTranslator.translate({
      url: driverRes.data
    });
    if (translatorRes.err) {
      return new ModuleQueryResponse<Url>(null, translatorRes.err);
    }
    return new ModuleQueryResponse<Url>(translatorRes.data);
  }

  pop(): ModuleCommandResponse {
    const res = this.urlDriver.pop();
    return new ModuleCommandResponse(res.err);
  }

  push(route: Route): ModuleCommandResponse {
    const res = this.urlDriver.push(route.path);
    return new ModuleCommandResponse(res.err);
  }

  replace(route: Route): ModuleCommandResponse {
    const res = this.urlDriver.write(route.path);
    return new ModuleCommandResponse(res.err);
  }

  popTransition(): ModuleCommandResponse {
    const res = this.routerDriver.pop();
    return new ModuleCommandResponse(res.err);
  }

  pushTransition(route: Route) {
    const res = this.routerDriver.push(route.path);
    return new ModuleCommandResponse(res.err);
  }

  replaceTransition(route: Route) {
    const res = this.routerDriver.replace(route.path);
    return new ModuleCommandResponse(res.err);
  }
}