export class ItemComment {

  readonly value;

  constructor(value: string) {
    this.value = value ? value : '';
  }
}