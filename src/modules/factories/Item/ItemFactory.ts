import {ItemFactoryInterface} from "./ItemFactoryInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Item} from "../../entities/Item";
import {ItemFactoryInput} from "./ItemFactoryInput";

export class ItemFactory implements ItemFactoryInterface {

  public create(port: ItemFactoryInput): ModuleQueryResponse<Item> {
    console.log('factory create. port: ', port);
    let item;
    try {
      item = new Item(port);
    } catch(e) {
      console.log('factory failed. e: ', e);
      return new ModuleQueryResponse<Item>(null, e);
    }
    return new ModuleQueryResponse<Item>(item);
  }

  public merge(item: Item, update: Partial<ItemFactoryInput>): ModuleQueryResponse<Item> {
    console.log('merge. item: ', item, 'update: ', update);
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

