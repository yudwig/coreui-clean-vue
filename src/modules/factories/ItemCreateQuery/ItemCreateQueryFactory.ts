import {ItemCreateQueryFactoryInterface} from "./ItemCreateQueryFactoryInterface";
import {ItemCreateQueryFactoryInput} from "./ItemCreateQueryFactoryInput";
import {ItemCreateQuery} from "../../queries/ItemCreate/ItemCreateQuery";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";

export class ItemCreateQueryFactory implements ItemCreateQueryFactoryInterface {

  create(port: ItemCreateQueryFactoryInput): ModuleQueryResponse<ItemCreateQuery> {
    let itemCreateQuery;
    try {
      itemCreateQuery = new ItemCreateQuery({
        title: port.title,
        comment: port.comment,
        imageUrl: port.imageUrl,
      });
    } catch(e) {
      return new ModuleQueryResponse<ItemCreateQuery>(null, e);
    }
    console.log('item create query factory res:', itemCreateQuery);
    return new ModuleQueryResponse<ItemCreateQuery>(itemCreateQuery);
  }
}