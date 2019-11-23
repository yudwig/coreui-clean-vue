import statusCodes from './status-codes';
import StatusMessage from "./status-message";

class HttpResponseStatus {
  constructor(status) {
    this.code     = status.code;
    this.messages = status.messages ? status.messages.map(msg => new StatusMessage(msg)) : [];
  }

  isSuccess() {
    return this.code === statusCodes.ok;
  }
}

export default HttpResponseStatus;

