import {ItemComment} from "../valueobjects/ItemComment";
import {ItemTitle} from "../valueobjects/ItemTitle";
import {ItemId} from "../valueobjects/ItemId";
import {Time} from "../valueobjects/Time";
import {Url} from "./Url";
import {DomainTypeError} from "../errors/DomainTypeError";
import {DomainError} from "../errors/DomainError";

export class Item {

  readonly id: ItemId;
  readonly title: ItemTitle;
  readonly imageUrl: Url;
  readonly comment: ItemComment;
  readonly createdAt: Time;
  readonly updatedAt: Time;

  constructor(item: Required<Item>) {
    if (!item) {
      throw new DomainError('Input port is null. Can not create item.');
    }
    if (!(item.id instanceof ItemId)) {
      throw new DomainTypeError('input id is not instance of ItemId', item.id);
    }
    if (!(item.title instanceof ItemTitle)) {
      throw new DomainTypeError('input title is not instance of ItemTitle', item.title);
    }
    if (!(item.imageUrl instanceof Url)) {
      throw new DomainTypeError('input imageUrl is not instance of Url', item.imageUrl);
    }
    if (!(item.comment instanceof ItemComment)) {
      throw new DomainTypeError('input comment is not instance of ItemComment', item.comment);
    }
    if (!(item.createdAt instanceof Time)) {
      throw new DomainTypeError('input createdAt is not instance of Time', item.createdAt);
    }
    if (!(item.updatedAt instanceof Time)) {
      throw new DomainTypeError('input updatedAt is not instance of Time', item.updatedAt);
    }
    this.id = item.id;
    this.title = item.title;
    this.imageUrl = item.imageUrl;
    this.comment = item.comment;
    this.createdAt = item.createdAt;
    this.updatedAt = item.updatedAt;
  }
}
