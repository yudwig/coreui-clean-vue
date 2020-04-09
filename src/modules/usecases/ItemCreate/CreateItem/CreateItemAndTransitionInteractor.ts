import {CreateItemUseCase} from "./CreateItemUseCase";
import {ItemRepositoryInterface} from "../../../repositories/Item/ItemRepositoryInterface";
import {ItemCreateQueryTranslatorInterface} from "../../../translaters/ItemCreateQuery/ItemCreateQueryTranslatorInterface";
import {RouteRepositoryInterface} from "../../../repositories/Route/RouteRepositoryInterface";
import {UrlRepositoryInterface} from "../../../repositories/Url/UrlRepositoryInterface";
import {ItemCreateViewStateInterface} from "../../../states/ItemCreateViewStateInterface";
import {ItemListViewStateInterface} from "../../../states/ItemListViewStateInterface";
import {ItemListMessage} from "../../../presentations/ItemList/ItemListMessagePresentation";
import {ItemCreateMessage} from "../../../presentations/ItemCreate/ItemCreateMessagePresentation";

export class CreateItemAndTransitionInteractor implements CreateItemUseCase {

  private itemRepository: ItemRepositoryInterface;
  private itemCreateQueryTranslator: ItemCreateQueryTranslatorInterface;
  private routeRepository: RouteRepositoryInterface;
  private urlRepository: UrlRepositoryInterface;

  private itemCreateState: ItemCreateViewStateInterface;
  private itemListState: ItemListViewStateInterface;

  private moveTo = 'itemList';

  constructor(
    itemRepository: ItemRepositoryInterface,
    itemCreateQueryTranslator: ItemCreateQueryTranslatorInterface,
    itemCreateState: ItemCreateViewStateInterface,
    routeRepository: RouteRepositoryInterface,
    urlRepository: UrlRepositoryInterface,
    itemListState: ItemListViewStateInterface
  ) {
    this.itemRepository = itemRepository;
    this.itemCreateQueryTranslator = itemCreateQueryTranslator;
    this.itemCreateState = itemCreateState;
    this.routeRepository = routeRepository;
    this.urlRepository = urlRepository;
    this.itemListState = itemListState;
  }

  handle(form) {

    console.log('interactor. query',  form);
    const translatorResponse = this.itemCreateQueryTranslator.translate({
      title: form.title,
      comment: form.comment,
      imageUrl: form.imageUrl
    });

    console.log('interactor. translatorResponse',  translatorResponse);
    if (translatorResponse.err) {
      this.itemCreateState.setMessage(ItemCreateMessage.Message.CREATE_ERROR);
      console.log('item create query translator error.',  translatorResponse.err);
      return false;
    }

    const itemRepositoryResponse = this.itemRepository.create(translatorResponse.data);
    console.log('interactor. itemRepositoryResponse',  itemRepositoryResponse);
    if (itemRepositoryResponse.err) {
      this.itemCreateState.setMessage(ItemCreateMessage.Message.CREATE_ERROR);
      console.log('item repository error.',  itemRepositoryResponse.err);
      return false;
    }

    const routeRepositoryResponse = this.routeRepository.findByName(this.moveTo);
    if (routeRepositoryResponse.err) {
      // TODO: system error.
      console.log('system error has occurred. url: ', routeRepositoryResponse);
      return false;
    }

    this.itemListState.setMessage(ItemListMessage.CREATE_SUCCESS);

    const res = this.urlRepository.pushRoute(routeRepositoryResponse.data);
    if (res.err) {
      // TODO: system error.
      console.log('system error has occurred. res: ', res);
      return false;
    }
  }
}