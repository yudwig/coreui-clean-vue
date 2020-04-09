export interface SerializerInterface {
  serialize(src: Object): string;
  deserialize(src: string): Object;
}