import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Items} from "../../entities/Items";
import {ItemTranslatorInput} from "../Item/ItemTranslatorInput";

export interface ItemsTranslatorInterface {
  translate(port: ItemTranslatorInput[]): ModuleQueryResponse<Items>
}