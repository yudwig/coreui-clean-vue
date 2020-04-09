import {ItemTranslatorInterface} from "./ItemTranslatorInterface";
import {ItemGateway} from "../../gateways/Item/ItemGateway";
import {ItemGatewayInterface} from "../../gateways/Item/ItemGatewayInterface";
import {ItemFactoryInterface} from "../../factories/Item/ItemFactoryInterface";
import {ItemFactory} from "../../factories/Item/ItemFactory";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {ItemTranslatorInput} from "./ItemTranslatorInput";
import {Item} from "../../entities/Item";

export class ItemTranslator implements ItemTranslatorInterface {

  readonly gateway: ItemGatewayInterface;
  readonly factory: ItemFactoryInterface;

  constructor() {
    this.gateway = new ItemGateway();
    this.factory = new ItemFactory();
  }

  translate(port: ItemTranslatorInput): ModuleQueryResponse<Item>{

    let gatewayResponse = this.gateway.convert(port);
    if (gatewayResponse.err) {
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
    if (factoryResponse.err) {
      return new ModuleQueryResponse<Item>(null, factoryResponse.err);
    }
    return new ModuleQueryResponse<Item>(factoryResponse.data);
  }
}