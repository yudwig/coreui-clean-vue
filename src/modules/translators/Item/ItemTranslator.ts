import {ItemTranslatorInterface} from "./ItemTranslatorInterface";
import {ItemGatewayInterface} from "../../gateways/Item/ItemGatewayInterface";
import {ItemFactoryInterface} from "../../factories/Item/ItemFactoryInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {ItemTranslatorInput} from "./ItemTranslatorInput";
import {Item} from "../../entities/Item";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";

export class ItemTranslator implements ItemTranslatorInterface {

  private gateway: ItemGatewayInterface;
  private factory: ItemFactoryInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    gateway: ItemGatewayInterface,
    factory: ItemFactoryInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  translate(port: ItemTranslatorInput): ModuleQueryResponse<Item>{
    this.support.debug('port: ', port);
    let gatewayResponse = this.gateway.convert(port);
    this.support.debug('gatewayResponse: ', gatewayResponse);
    if (gatewayResponse.err) {
      this.support.error('gateway error: ', gatewayResponse.err);
      return new ModuleQueryResponse<Item>(null, gatewayResponse.err);
    }
    let factoryResponse = this.factory.create({
      id: gatewayResponse.data.id,
      title: gatewayResponse.data.title,
      imageUrl: gatewayResponse.data.imageUrl,
      comment: gatewayResponse.data.comment,
      createdAt: gatewayResponse.data.createdAt,
      updatedAt: gatewayResponse.data.updatedAt
    });
    this.support.debug('factoryResponse: ', factoryResponse);
    if (factoryResponse.err) {
      return new ModuleQueryResponse<Item>(null, factoryResponse.err);
    }
    return new ModuleQueryResponse<Item>(factoryResponse.data);
  }
}