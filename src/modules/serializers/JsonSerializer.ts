import {SerializerInterface} from "./SerializerInterface";

export class JsonSerializer implements SerializerInterface {

  deserialize(src: string): Object {
    return undefined;
  }

  serialize(src: Object): string {
    return "";
  }
}