import {HttpRequest} from "../entities/HttpRequest";
import {HttpResponse} from "../entities/HttpResponse";

export interface ServerStorageDriverInterface {
    request(httpRequest: HttpRequest): HttpResponse;
}