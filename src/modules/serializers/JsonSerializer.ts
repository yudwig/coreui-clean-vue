import {SerializerInterface} from "./SerializerInterface";
import {ModuleSupportInterface} from "../supports/ModuleSupportInterface";

export class JsonSerializer implements SerializerInterface {

  private support: ModuleSupportInterface;

  constructor(modules: {
    support: ModuleSupportInterface
  }) {
    Object.assign(this, modules);
  }

  deserialize(src: string): Object {
    return undefined;
  }

  serialize(src: Object): string {
    return "";
  }
}