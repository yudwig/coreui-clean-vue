import {UrlFactoryInterface} from "./UrlFactoryInterface";
import {UrlGatewayOutput} from "../../gateways/Url/UrlGatewayInterface";
import {ModuleQueryResponse} from "../../entities/ModuleQueryResponse";
import {Url} from "../../entities/Url";

export class UrlFactory implements UrlFactoryInterface {
  create(port: UrlGatewayOutput): ModuleQueryResponse<Url> {
    let url: Url;
    try {
      url = new Url(port.urlHref, port.urlDirectories, port.urlParameters);
    } catch(e) {
      return new ModuleQueryResponse<Url>(null, e);
    }
    return new ModuleQueryResponse<Url>(url);
  }
}