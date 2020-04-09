import {AppError} from "./AppError";

export class UndefinedRouteError extends AppError {

  readonly input: string;

  constructor(message: string, input: string) {
    super(message);
    this.input = input;
  }
}