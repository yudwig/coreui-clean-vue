import {ItemCreateQueryTranslatorInterface} from "./ItemCreateQueryTranslatorInterface";
import {ItemCreateQueryTranslatorInput} from "./ItemCreateQueryTranslatorInput";
import {ItemCreateQuery} from "../../queries/ItemCreate/ItemCreateQuery";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {ItemGatewayInterface} from "../../gateways/Item/ItemGatewayInterface";
import {ItemCreateQueryFactoryInterface} from "../../factories/ItemCreateQuery/ItemCreateQueryFactoryInterface";
import {ItemCreateQueryFactoryInput} from "../../factories/ItemCreateQuery/ItemCreateQueryFactoryInput";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";

export class ItemCreateQueryTranslator implements ItemCreateQueryTranslatorInterface {

  private gateway: ItemGatewayInterface;
  private factory: ItemCreateQueryFactoryInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    gateway: ItemGatewayInterface,
    factory: ItemCreateQueryFactoryInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  translate(port: ItemCreateQueryTranslatorInput): ModuleQueryResponse<ItemCreateQuery> {
    const gatewayRes = this.gateway.convert(port);
    if (gatewayRes.err) {
      return new ModuleQueryResponse<ItemCreateQuery>(null, gatewayRes.err);
    }
    this.support.debug('gatewayRes: ', gatewayRes);
    const factoryRes = this.factory.create(<ItemCreateQueryFactoryInput>gatewayRes.data);
    if (factoryRes.err) {
      return new ModuleQueryResponse<ItemCreateQuery>(null, factoryRes.err);
    }
    this.support.debug('factoryRes: ', factoryRes);
    return new ModuleQueryResponse<ItemCreateQuery>(factoryRes.data);
  }
}