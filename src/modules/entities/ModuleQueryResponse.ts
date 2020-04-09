export class ModuleQueryResponse<T> {
  readonly data: T;
  readonly err: Error;
  readonly msg: string;

  constructor(data: T, err: Error = null, msg: string = '') {
    this.data = data;
    this.err = err;
    this.msg = msg;
  }
}