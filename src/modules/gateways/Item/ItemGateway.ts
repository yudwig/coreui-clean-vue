import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {ItemId} from "../../valueobjects/ItemId";
import {ItemTitle} from "../../valueobjects/ItemTitle";
import {ItemComment} from "../../valueobjects/ItemComment";
import {Time} from "../../valueobjects/Time";
import {ItemGatewayInterface} from "./ItemGatewayInterface";
import {ItemGatewayInputInterface} from "./ItemGatewayInputInterface";
import {ItemGatewayOutputInterface} from "./ItemGatewayOutputInterface";
import {UrlTranslatorInterface} from "../../translators/Url/UrlTranslatorInterface";
import {ModuleSupportInterface} from "../../supports/ModuleSupportInterface";

export class ItemGateway implements ItemGatewayInterface {

  private urlTranslator: UrlTranslatorInterface;
  private support: ModuleSupportInterface;

  constructor(modules: {
    urlTranslator: UrlTranslatorInterface,
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  convert(port: ItemGatewayInputInterface): ModuleQueryResponse<ItemGatewayOutputInterface> {
    let output: ItemGatewayOutputInterface = {};
    try {
      if (port.hasOwnProperty('id')) {
        output.id = new ItemId(port.id);
      }
      if (port.hasOwnProperty('title')) {
        output.title = new ItemTitle(port.title);
      }
      if (port.hasOwnProperty('imageUrl')) {
        const urlTranslatorRes = this.urlTranslator.translate({
          url: port.imageUrl
        });
        if (urlTranslatorRes.err) {
          return new ModuleQueryResponse<ItemGatewayOutputInterface>(null, urlTranslatorRes.err);
        }
        output.imageUrl = urlTranslatorRes.data;
      }
      if (port.hasOwnProperty('comment')) {
        output.comment = new ItemComment(port.comment);
      }
      if (port.hasOwnProperty('createdAt')) {
        output.createdAt = new Time(parseInt(port.createdAt, 10));
      }
      if (port.hasOwnProperty('updatedAt')) {
        output.updatedAt = new Time(parseInt(port.updatedAt, 10));
      }
    } catch (e) {
      this.support.error('item gateway error. err: ', e);
      return new ModuleQueryResponse<ItemGatewayOutputInterface>(null, e);
    }
    this.support.debug('item gateway output: ', output);
    return new ModuleQueryResponse<ItemGatewayOutputInterface>(output);
  }
}