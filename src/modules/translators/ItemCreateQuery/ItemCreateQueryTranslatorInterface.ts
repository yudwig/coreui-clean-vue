import {ItemCreateQueryTranslatorInput} from "./ItemCreateQueryTranslatorInput";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {ItemCreateQuery} from "../../queries/ItemCreate/ItemCreateQuery";

export interface ItemCreateQueryTranslatorInterface {
  translate(port: ItemCreateQueryTranslatorInput): ModuleQueryResponse<ItemCreateQuery>;
}