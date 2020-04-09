import {ItemCreateQueryFactoryInput} from "./ItemCreateQueryFactoryInput";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {ItemCreateQuery} from "../../queries/ItemCreate/ItemCreateQuery";

export interface ItemCreateQueryFactoryInterface {
  create(port: ItemCreateQueryFactoryInput): ModuleQueryResponse<ItemCreateQuery>;
}