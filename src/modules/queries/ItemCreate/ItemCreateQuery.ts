import {ItemTitle} from "../../valueobjects/ItemTitle";
import {ItemComment} from "../../valueobjects/ItemComment";
import {Url} from "../../entities/Url";

export class ItemCreateQuery {

  readonly title: ItemTitle;
  readonly comment: ItemComment;
  readonly imageUrl: Url;

  constructor(form: Required<ItemCreateQuery>) {
    this.title = form.title;
    this.comment = form.comment;
    this.imageUrl = form.imageUrl;
  }
}