import {AppError} from "./AppError";

export class JsonFormatError extends AppError {

  readonly input: Object;
  readonly key: string;

  constructor(message: string, input: Object, key: string) {
    super(message);
    this.input = input;
    this.key = key;
  }
}