import {UrlDriverInterface} from "./UrlDriverInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {ModuleCommandResponse} from "../../entities/ModuleCommandResponse";

export class MockUrlDriver implements UrlDriverInterface {

  private history: string[];

  constructor() {
    this.history = [];
  }

  read(): ModuleQueryResponse<string> {
    return new ModuleQueryResponse<string>(this.history[this.history.length - 1]);
  }

  write(url: string): ModuleCommandResponse {
    const index = Math.min(this.history.length - 1, 0);
    this.history[index] = url;
    return new ModuleCommandResponse(null);
  }

  pop(): ModuleCommandResponse {
    this.history.pop();
    return new ModuleCommandResponse(null);
  }

  push(url: string): ModuleCommandResponse {
    this.history.push(url);
    return new ModuleCommandResponse(null);
  }
}