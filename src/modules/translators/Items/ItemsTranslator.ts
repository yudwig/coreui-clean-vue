import {ItemsTranslatorInterface} from "./ItemsTranslatorInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Items} from "../../entities/Items";
import {ItemTranslatorInterface} from "../Item/ItemTranslatorInterface";
import {ItemTranslatorInput} from "../Item/ItemTranslatorInput";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";

export class ItemsTranslator implements ItemsTranslatorInterface {

  private itemTranslator: ItemTranslatorInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    itemTranslator: ItemTranslatorInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  translate(port: ItemTranslatorInput[]): ModuleQueryResponse<Items> {

    const list = port.map(data => {
      const res = this.itemTranslator.translate(data);
      return res.data;
    });

    this.support.debug(list);
    const items = new Items(list);
    return new ModuleQueryResponse<Items>(items);
  }
}