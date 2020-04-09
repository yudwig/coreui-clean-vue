import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Url} from "../../entities/Url";
import {UrlTranslatorInputInterface} from "./UrlTranslatorInputInterface";

export interface UrlTranslatorInterface {
  translate(port: UrlTranslatorInputInterface): ModuleQueryResponse<Url>;
}