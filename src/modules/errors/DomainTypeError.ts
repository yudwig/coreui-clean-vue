import {DomainError} from "./DomainError";

export class DomainTypeError extends DomainError {

  readonly input: string;

  constructor(message: string, input: string) {
    super(message);
    this.input = input;
  }
}