import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {ItemId} from "../../valueobjects/ItemId";
import {ItemTitle} from "../../valueobjects/ItemTitle";
import {ItemComment} from "../../valueobjects/ItemComment";
import {Time} from "../../valueobjects/Time";
import {ItemGatewayInterface} from "./ItemGatewayInterface";
import {ItemGatewayInputInterface} from "./ItemGatewayInputInterface";
import {ItemGatewayOutputInterface} from "./ItemGatewayOutputInterface";
import {UrlTranslator} from "../../translaters/Url/UrlTranslator";
import {UrlTranslatorInterface} from "../../translaters/Url/UrlTranslatorInterface";
import {UrlGatewayInterface} from "../Url/UrlGatewayInterface";
import {UrlFactoryInterface} from "../../factories/Url/UrlFactoryInterface";
import {UrlGateway} from "../Url/UrlGateway";
import {UrlFactory} from "../../factories/Url/UrlFactory";

export class ItemGateway implements ItemGatewayInterface {

  private urlTranslator: UrlTranslatorInterface;
  private urlGateway: UrlGatewayInterface;
  private urlFactory: UrlFactoryInterface;

  constructor() {
    this.urlGateway = new UrlGateway();
    this.urlFactory = new UrlFactory();

    this.urlTranslator = new UrlTranslator(
      this.urlGateway, this.urlFactory
    );
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
      return new ModuleQueryResponse<ItemGatewayOutputInterface>(null, e);
    }

    console.log('output: ', output);

    return new ModuleQueryResponse<ItemGatewayOutputInterface>(output);
  }
}