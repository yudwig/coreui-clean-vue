import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {ItemGatewayInputInterface} from "./ItemGatewayInputInterface";
import {ItemGatewayOutputInterface} from "./ItemGatewayOutputInterface";

export interface ItemGatewayInterface {
  convert(port: ItemGatewayInputInterface): ModuleQueryResponse<ItemGatewayOutputInterface>;
}