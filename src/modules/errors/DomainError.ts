import {AppError} from "./AppError";

export class DomainError extends AppError {
  constructor(message) {
    super(message);
  }
}