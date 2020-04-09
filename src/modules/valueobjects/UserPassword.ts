export class UserPassword {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  public equals(target: UserPassword): boolean {
    return target instanceof UserPassword && this.value === target.value;
  }
}