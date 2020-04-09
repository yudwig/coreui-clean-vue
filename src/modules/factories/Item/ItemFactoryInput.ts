import {ItemId} from "../../valueobjects/ItemId";
import {ItemTitle} from "../../valueobjects/ItemTitle";
import {ItemComment} from "../../valueobjects/ItemComment";
import {Time} from "../../valueobjects/Time";
import {Url} from "../../entities/Url";

export interface ItemFactoryInput {
  id: ItemId,
  title: ItemTitle,
  imageUrl: Url,
  comment: ItemComment,
  createdAt: Time,
  updatedAt: Time
}