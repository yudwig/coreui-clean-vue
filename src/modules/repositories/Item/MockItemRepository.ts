import {ItemRepositoryInterface} from "./ItemRepositoryInterface";
import {Item} from "../../entities/Item";
import {ItemSearchQuery} from "../../queries/ItemList/ItemSearchQuery";
import {SessionStorage} from "../../drivers/WebStorage/SessionStorage";
import {QueryStorageInterface} from "../../drivers/Storage/QueryStorage/QueryStorageInterface";
import {WebQueryStorage} from "../../drivers/Storage/QueryStorage/WebQueryStorage";
import {StorageQueryBuilder} from "../../queries/Storage/StorageQueryBuilder";
import {ItemTranslatorInterface} from "../../translaters/Item/ItemTranslatorInterface";
import {ItemTranslator} from "../../translaters/Item/ItemTranslator";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Items} from "../../entities/Items";
import {ItemsTranslatorInterface} from "../../translaters/Items/ItemsTranslatorInterface";
import {ItemsTranslator} from "../../translaters/Items/ItemsTranslator";
import {ItemCreateQuery} from "../../queries/ItemCreate/ItemCreateQuery";
import {SerializerInterface} from "../../serializers/SerializerInterface";
import {JsonSerializer} from "../../serializers/JsonSerializer";
import {ItemTranslatorInput} from "../../translaters/Item/ItemTranslatorInput";
import {ItemId} from "../../valueobjects/ItemId";
import {ModuleCommandResponse} from "../../entities/ModuleCommandResponse";
const dbItems = [
  {
    id: '1',
    title: 'A City Park',
    imageUrl: 'http://localhost:3000/images/1968.88 - A City Park.jpeg',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet mattis erat, feugiat accumsan tellus volutpat a. Quisque dapibus tincidunt ipsum, at placerat nisi efficitur nec. Nulla nisi ipsum, rutrum et nunc id, viverra eleifend enim. Curabitur nisi odio, ullamcorper id interdum eget, venenatis nec lacus. Nulla non egestas purus, et blandit dui. Vestibulum ullamcorper scelerisque sapien, id iaculis nibh blandit at. Aenean vel nunc hendrerit, finibus tellus in, tempor ex.',
    updatedAt: '1579152589',
    createdAt: '1578963600'
  },
  {
    id: '2',
    title: 'Paris Street; Rainy Day',
    imageUrl: 'http://localhost:3000/images/1964.336 - Paris Street; Rainy Day.jpeg',
    comment: 'Aenean in felis elementum, pulvinar ipsum eget, egestas ante. Integer eu ligula vitae sapien congue egestas. Donec at felis ut diam sodales efficitur a non ipsum. Sed vel massa tristique, maximus urna sed, suscipit ipsum. Etiam eget turpis enim. Etiam iaculis interdum enim, nec tempor sapien scelerisque eget. Proin aliquet dapibus nisi eget facilisis. Vivamus ligula lectus, auctor at mauris vitae, sagittis cursus metus. Morbi posuere volutpat elit, id facilisis nibh commodo eu.',
    updatedAt: '1579152589',
    createdAt: '1578963600'
  },
  {
    id: '3',
    title: 'Seascape',
    imageUrl: 'http://localhost:3000/images/1922.438 - Seascape.jpeg',
    comment: 'Donec magna tellus, blandit nec facilisis vitae, lacinia at mauris. Ut tempus enim leo, eu pulvinar purus convallis eget. Curabitur rutrum justo ut dolor finibus, a sollicitudin nunc eleifend. Mauris placerat quis arcu eu elementum. Morbi sed nisi ut risus egestas sagittis. Morbi tempus velit consectetur est aliquam cursus. Sed blandit scelerisque nisi, tristique aliquet eros. Nam eros urna, volutpat eu scelerisque eu, placerat eget leo. Cras gravida bibendum malesuada.',
    updatedAt: '1579152589',
    createdAt: '1578963600'
  },
  {
    id: '4',
    title: 'The Bathers',
    imageUrl: 'http://localhost:3000/images/1942.457 - The Bathers.jpeg',
    comment: 'Nam lacus nisi, efficitur quis dolor sit amet, condimentum faucibus purus. Etiam nec turpis sem. Aenean maximus sed dui vulputate egestas. Cras facilisis vestibulum eros sed mollis. Phasellus et congue nunc. Phasellus eget eros ut lorem tristique malesuada sit amet eget nisl. Suspendisse gravida mollis nunc elementum venenatis. Phasellus et mi sapien. Phasellus in lectus nec urna varius malesuada. Nulla facilisi. Nunc nunc risus, convallis quis vulputate sed, convallis nec purus. Morbi interdum iaculis est ut bibendum. In aliquet commodo ultrices. Vestibulum eleifend, justo id ultrices elementum, augue sem tincidunt quam, mattis eleifend massa sapien tempor mauris.',
    updatedAt: '1579152589',
    createdAt: '1578963600'
  },
  {
    id: '5',
    title: 'Fruits of the Midi',
    imageUrl: 'http://localhost:3000/images/1933.1176 - Fruits of the Midi.jpeg',
    comment: 'Nunc volutpat lacus non velit ullamcorper tristique. Praesent eu fringilla neque, eu egestas lectus. Curabitur tempus, ex a pretium tempus, elit urna vehicula nisl, ac fringilla augue sapien vel mauris. Integer at turpis viverra, feugiat nunc quis, posuere enim. Nunc facilisis ultricies nibh non scelerisque. Pellentesque mollis at urna vitae accumsan. Quisque malesuada posuere libero vel maximus. Nulla at fringilla massa.',
    updatedAt: '1579152589',
    createdAt: '1578963600'
  },
];

export class MockItemRepository implements ItemRepositoryInterface{

  private storage: QueryStorageInterface;
  private itemTranslator: ItemTranslatorInterface;
  private itemsTranslator: ItemsTranslatorInterface;
  private serializer: SerializerInterface;

  constructor() {
    this.storage = new WebQueryStorage(
      new SessionStorage()
    );
    if (!this.storage.isset('items')) {
      this.initData();
    }
    this.itemTranslator = new ItemTranslator();
    this.itemsTranslator = new ItemsTranslator();
    this.serializer = new JsonSerializer();
  }

  private initData() {
    dbItems.forEach(item => {
      this.storage.create('items', item);
    });
  }

  private buildFindByIdQuery(id: ItemId) {
    const builder = new StorageQueryBuilder();
    return builder
        .selectFrom('items')
        .where('id = ' + id.value)
        .build();
  }

  public find(id: ItemId): ModuleQueryResponse<Item> {
    const query = this.buildFindByIdQuery(id);
    const searchResponse = this.storage.search(query);
    if (searchResponse.err) {
      return new ModuleQueryResponse(null, searchResponse.err);
    }
    const translateResponse = this.itemTranslator.translate(<ItemTranslatorInput>searchResponse.data[0]);
    return new ModuleQueryResponse(translateResponse.data, translateResponse.err);
  }

  public search(query: ItemSearchQuery): ModuleQueryResponse<Items> {

    const builder = new StorageQueryBuilder();
    const searchQuery =
      builder
        .selectFrom('items')
        .all()
        .offset(query.index)
        .limit(query.count)
        .build();
    const searchResponse = this.storage.search(searchQuery);
    if (searchResponse.err) {
      return new ModuleQueryResponse(null, searchResponse.err);
    }
    const translateResponse = this.itemsTranslator.translate(<ItemTranslatorInput[]>searchResponse.data);
    return new ModuleQueryResponse(translateResponse.data, translateResponse.err);
  }

  public create(itemCreateQuery: ItemCreateQuery): ModuleQueryResponse<Item> {

    const builder = new StorageQueryBuilder();
    const searchQuery =
      builder
        .selectFrom('items')
        .all()
        .descSort('id')
        .limit(1)
        .build();
    const searchRes = this.storage.search(searchQuery);
    if (searchRes.err) {
      return new ModuleQueryResponse(null, searchRes.err);
    }
    const id = searchRes.data.length == 0 ? 0 : parseInt(searchRes.data[0]['id'], 10) + 1;
    const now = new Date();
    const data = {
      id: id.toString(),
      title: itemCreateQuery.title.value,
      comment: itemCreateQuery.comment.value,
      imageUrl: itemCreateQuery.imageUrl.href.value,
      updatedAt: now.getTime().toString(),
      createdAt: now.getTime().toString()
    };
    const translateRes = this.itemTranslator.translate(data);
    if (translateRes.err) {
      return new ModuleQueryResponse(null, translateRes.err);
    }
    const createRes = this.storage.create('items', data);
    if (createRes.err) {
      return new ModuleQueryResponse<Item>(null, createRes.err);
    }
    return new ModuleQueryResponse<Item>(translateRes.data);
  }

  public update(item: Item): ModuleQueryResponse<Item> {

    const searchQuery = this.buildFindByIdQuery(item.id);
    const searchRes = this.storage.search(searchQuery);
    if (searchRes.err) {
      return new ModuleQueryResponse(null, searchRes.err);
    }
    if (searchRes.data.length !== 1) {
      return new ModuleQueryResponse<Item>(null, new Error('not found or specified item. id: ' + item.id.value));
    }
    console.log('repository update item: ', item);
    const data = {
      id: item.id.value.toString(),
      title: item.title.value,
      comment: item.comment.value,
      imageUrl: item.imageUrl.href.value,
      updatedAt: new Date().getTime().toString(),
      createdAt: item.createdAt.value.toString()
    };
    console.log('repository update data',  data);
    const translateRes = this.itemTranslator.translate(data);
    if (translateRes.err) {
      return new ModuleQueryResponse<Item>(null, translateRes.err);
    }
    const storageRes = this.storage.update(searchQuery, data);
    if (storageRes.err) {
      return new ModuleQueryResponse<Item>(null, storageRes.err);
    }
    return new ModuleQueryResponse<Item>(translateRes.data);
  }

  public delete(id: ItemId): ModuleCommandResponse {
    const query = this.buildFindByIdQuery(id);
    const res = this.storage.delete(query);
    return new ModuleCommandResponse(res.err);
  }
}