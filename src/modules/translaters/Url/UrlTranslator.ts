import {UrlTranslatorInterface} from "./UrlTranslatorInterface";
import {UrlGatewayInput, UrlGatewayInterface} from "../../gateways/Url/UrlGatewayInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Url} from "../../entities/Url";
import {UrlFactoryInterface} from "../../factories/Url/UrlFactoryInterface";

export class UrlTranslator implements UrlTranslatorInterface {

  private gateway: UrlGatewayInterface;
  private factory: UrlFactoryInterface;

  constructor(
    urlGateway: UrlGatewayInterface,
    urlFactory: UrlFactoryInterface
  ) {
    this.gateway = urlGateway;
    this.factory = urlFactory;
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