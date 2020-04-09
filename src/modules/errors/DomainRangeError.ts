import {DomainError} from "./DomainError";

export class DomainRangeError extends DomainError {

  readonly input: number;
  readonly limit: number;

  constructor(message: string, input: number, limit: number) {
    super(message);
    this.input = input;
    this.limit = limit;
  }
}