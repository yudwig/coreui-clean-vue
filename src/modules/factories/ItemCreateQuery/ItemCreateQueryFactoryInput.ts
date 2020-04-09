import {ItemComment} from "../../valueobjects/ItemComment";
import {ItemTitle} from "../../valueobjects/ItemTitle";
import {Url} from "../../entities/Url";

export interface ItemCreateQueryFactoryInput {
  title: ItemTitle,
  comment: ItemComment,
  imageUrl: Url
}