
import HttpResponseStatus from './http-response-status';

class HttpResponse {
  constructor(status, data) {
    this.status = new HttpResponseStatus(status);
    this.data   = data;
  }
}

export default HttpResponse;

