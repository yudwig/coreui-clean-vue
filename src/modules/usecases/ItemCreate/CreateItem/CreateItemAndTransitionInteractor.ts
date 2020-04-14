import {CreateItemUseCase} from "./CreateItemUseCase";
import {ItemRepositoryInterface} from "../../../repositories/Item/ItemRepositoryInterface";
import {ItemCreateQueryTranslatorInterface} from "../../../translators/ItemCreateQuery/ItemCreateQueryTranslatorInterface";
import {RouteRepositoryInterface} from "../../../repositories/Route/RouteRepositoryInterface";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";
import {ItemCreateViewStateInterface} from "../../../states/ItemCreateViewStateInterface";
import {ItemCreateMessage} from "../../../presentations/ItemCreate/ItemCreateMessagePresentation";
import {ModuleSupportInterface} from "../../../supports/ModuleSupportInterface";

const moveTo = 'itemList';

export class CreateItemAndTransitionInteractor implements CreateItemUseCase {

  private support: ModuleSupportInterface;
  private itemRepository: ItemRepositoryInterface;
  private itemCreateQueryTranslator: ItemCreateQueryTranslatorInterface;
  private routeRepository: RouteRepositoryInterface;
  private urlRepository: UrlRepositoryInterface;
  private itemCreateState: ItemCreateViewStateInterface;

  constructor(modules: {
    support: ModuleSupportInterface,
    itemRepository: ItemRepositoryInterface,
    itemCreateQueryTranslator: ItemCreateQueryTranslatorInterface,
    routeRepository: RouteRepositoryInterface,
    urlRepository: UrlRepositoryInterface,
    itemCreateState: ItemCreateViewStateInterface
  }) {
    Object.assign(this, modules);
  }

  handle(form) {
    this.support.debug("test");
    this.support.debug('interactor. query',  form);
    const translatorResponse = this.itemCreateQueryTranslator.translate({
      title: form.title,
      comment: form.comment,
      imageUrl: form.imageUrl
    });

    this.support.debug('interactor. translatorResponse',  translatorResponse);
    if (translatorResponse.err) {
      this.itemCreateState.setMessage(ItemCreateMessage.Message.CREATE_ERROR);
      this.support.error('item create query translator error.',  translatorResponse.err);
      return false;
    }

    const itemRepositoryResponse = this.itemRepository.create(translatorResponse.data);
    this.support.debug('interactor. itemRepositoryResponse',  itemRepositoryResponse);
    if (itemRepositoryResponse.err) {
      this.itemCreateState.setMessage(ItemCreateMessage.Message.CREATE_ERROR);
      this.support.error('item repository error.',  itemRepositoryResponse.err);
      return false;
    }

    const routeRepositoryResponse = this.routeRepository.findByName(moveTo);
    if (routeRepositoryResponse.err) {
      this.support.error('system error has occurred. url: ', routeRepositoryResponse);
      return false;
    }
    const res = this.urlRepository.pushTransition(routeRepositoryResponse.data);
    if (res.err) {
      this.support.error('system error has occurred. res: ', res);
      return false;
    }
  }
}