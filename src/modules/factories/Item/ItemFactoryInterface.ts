import {Item} from "../../entities/Item";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {ItemFactoryInput} from "./ItemFactoryInput";

export interface ItemFactoryInterface {
  create(port: ItemFactoryInput): ModuleQueryResponse<Item>;
  merge(item: Item, update: Partial<ItemFactoryInput>): ModuleQueryResponse<Item>;
}