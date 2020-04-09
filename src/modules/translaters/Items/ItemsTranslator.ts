import {ItemsTranslatorInterface} from "./ItemsTranslatorInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Items} from "../../entities/Items";
import {ItemTranslatorInterface} from "../Item/ItemTranslatorInterface";
import {ItemTranslator} from "../Item/ItemTranslator";
import {ItemTranslatorInput} from "../Item/ItemTranslatorInput";

export class ItemsTranslator implements ItemsTranslatorInterface {

  private itemTranslator: ItemTranslatorInterface;

  constructor() {
    this.itemTranslator = new ItemTranslator();
  }

  translate(port: ItemTranslatorInput[]): ModuleQueryResponse<Items> {

    let list = [];
    const err = port.find(data => {
      const res = this.itemTranslator.translate(data);
      if (res.err) {
        return res.err;
      }
      list.push(res.data);
    });

    // if (err) {
    //   return new ModuleQueryResponse<Items>(null, err);
    // }

    console.log(list);
    const items = new Items(list);
    return new ModuleQueryResponse<Items>(items);
  }
}