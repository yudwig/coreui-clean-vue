import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Item} from "../../entities/Item";
import {ItemTranslatorInput} from "./ItemTranslatorInput";

export interface ItemTranslatorInterface {
  translate(port: ItemTranslatorInput): ModuleQueryResponse<Item>;
}