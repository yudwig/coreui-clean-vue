import {DomainRangeError} from "../errors/DomainRangeError";

export class UserId {
  readonly value: string;
  private minLength = 1;

  constructor(value: string) {
    if (value.length < this.minLength) {
      throw new DomainRangeError("USER_ID_IS_OVER_MIN_LENGTH_LIMIT", value.length, this.minLength);
    }
    this.value = value;
  }

  public equals(target: UserId): boolean {
    return target instanceof UserId && this.value === target.value;
  }
}