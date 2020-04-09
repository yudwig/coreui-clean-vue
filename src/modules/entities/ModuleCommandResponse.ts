export class ModuleCommandResponse {
  readonly err: Error;
  readonly msg: string;

  constructor(err: Error = null, msg: string = '') {
    this.err = err;
    this.msg = msg;
  }
}