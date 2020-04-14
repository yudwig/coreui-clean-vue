import {UrlTranslatorInterface} from "./UrlTranslatorInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Url} from "../../entities/Url";
import {UrlFactoryInterface} from "../../factories/Url/UrlFactoryInterface";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";
import {UrlGatewayInput, UrlGatewayInterface} from "../../containers/ModulesBarrel";

export class UrlTranslator implements UrlTranslatorInterface {

  private gateway: UrlGatewayInterface;
  private factory: UrlFactoryInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    gateway: UrlGatewayInterface,
    factory: UrlFactoryInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  translate(port: UrlGatewayInput): ModuleQueryResponse<Url> {
    const gatewayRes = this.gateway.convert(port);
    if (gatewayRes.err) {
      return new ModuleQueryResponse<Url>(null, gatewayRes.err);
    }
    const factoryRes = this.factory.create(gatewayRes.data);
    if (factoryRes.err) {
      return new ModuleQueryResponse<Url>(null, factoryRes.err);
    }
    return new ModuleQueryResponse<Url>(factoryRes.data);
  }
}