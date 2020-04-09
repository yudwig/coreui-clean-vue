import {Item} from "../../entities/Item";
import {ItemSearchQuery} from "../../queries/ItemList/ItemSearchQuery";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Items} from "../../entities/Items";
import {ItemCreateQuery} from "../../queries/ItemCreate/ItemCreateQuery";
import {ModuleCommandResponse} from "../../entities/ModuleCommandResponse";
import {ItemId} from "../../valueobjects/ItemId";

export interface ItemRepositoryInterface {
  find(id: ItemId): ModuleQueryResponse<Item>;
  search(query: ItemSearchQuery): ModuleQueryResponse<Items>;
  create(itemCreateQuery: ItemCreateQuery): ModuleQueryResponse<Item>;
  update(item: Item): ModuleQueryResponse<Item>;
  delete(id: ItemId): ModuleCommandResponse;
}
