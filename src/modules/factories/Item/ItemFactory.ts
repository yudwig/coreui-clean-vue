import {ItemFactoryInterface} from "./ItemFactoryInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Item} from "../../entities/Item";
import {ItemFactoryInput} from "./ItemFactoryInput";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";

export class ItemFactory implements ItemFactoryInterface {

  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  public create(port: ItemFactoryInput): ModuleQueryResponse<Item> {
    this.support.debug('factory create. port: ', port);
    let item;
    try {
      item = new Item(port);
    } catch(e) {
      this.support.error('factory failed. e: ', e);
      return new ModuleQueryResponse<Item>(null, e);
    }
    return new ModuleQueryResponse<Item>(item);
  }

  public merge(item: Item, update: Partial<ItemFactoryInput>): ModuleQueryResponse<Item> {
    this.support.debug('merge. item: ', item, 'update: ', update);
    return this.create({
      id: item.id,
      title: update.hasOwnProperty('title') ? update.title : item.title,
      imageUrl: update.hasOwnProperty('imageUrl') ? update.imageUrl : item.imageUrl,
      comment: update.hasOwnProperty('comment') ? update.comment : item.comment,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    });
  }
}

