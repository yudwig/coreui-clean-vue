import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Item} from "../../entities/Item";
import {ItemTranslatorInput} from "./ItemTranslatorInput";
import {ItemFactoryInterface} from "../../factories/Item/ItemFactoryInterface";
import {ItemGatewayInterface} from "../../gateways/Item/ItemGatewayInterface";

export interface ItemTranslatorInterface {

  readonly factory: ItemFactoryInterface;
  readonly gateway: ItemGatewayInterface;

  translate(port: ItemTranslatorInput): ModuleQueryResponse<Item>;
}